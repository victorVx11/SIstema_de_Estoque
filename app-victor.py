from flask import Flask, request,render_template,redirect
import sqlite3

app = Flask(__name__)

def criar_banco():
    conexao = sqlite3.connect("estoque.db")
    conexao.execute("""
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            quantidade INTEGER NOT NULL,
            preco REAL NOT NULL
        )
    """)
    conexao.commit()
    conexao.close()

@app.route("/")

def inicio():
    conexao = sqlite3.connect("estoque.db")
    produtos = conexao.execute("""
    SELECT id, 
            nome, 
            quantidade, 
            preco FROM produtos
    """).fetchall()
    conexao.close()
    return render_template("index.html", produtos = produtos)


@app.route("/cadastrar", methods=["POST"])
def cadastrar_produto():
    nome = request.form.get("nome")

    quantidade = int(request.form.get("quantidade"))

    preco = float(request.form.get("preco"))

    
    conexao = sqlite3.connect("estoque.db")
    conexao.execute(
        "INSERT INTO produtos (nome,quantidade,preco)VALUES (?,?,?)",
        (nome,quantidade,preco)
    )
    conexao.commit()
    conexao.close()
    


    return redirect("/")
@app.route("/excluir/<int:id>", methods=["POST"])
def excluir_produto(id):
    conexao = sqlite3.connect("estoque.db")
    conexao.execute(
        "DELETE FROM produtos WHERE id = ?",
        (id,)
    )
    conexao.commit()
    conexao.close()

    return redirect("/")


if __name__ == "__main__":
    criar_banco()
    app.run(debug=True)

