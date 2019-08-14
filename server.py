from flask import Flask, render_template, url_for


app = Flask(__name__)


@app.route("/")
def game():
    return render_template("game.html", row_num=70, col_num=130)


if __name__ == '__main__':
    app.run(debug=True)
