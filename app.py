from  flask import Flask, render_template, request 
import sqlite3

app = Flask(__name__)

def index():
    return render_template('login.jsx')

connect = sqlite3.connect('database.db')
connect.execute('CREATE TABLE IF NOT EXISTS users (username TEXT, email TEXT, password TEXT, pin INT, phone INT, Balance FLOAT)')

@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST': 
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        pin = request.form['pin']
        phone = request.form['phone']
        Balance = request.form['Balance']

        with sqlite3.connect("database.db") as users:
            cursor = users.cursor() 
            cursor.execute("INSERT INTO PARTICIPANTS \
                        (username,email,password, pin, phone, Balance) VALUES (?,?,?,?,?,?)", 
                           (username,email,password, pin, phone, Balance)) 
            users.commit() 

        return render_template("inedx.jsx") 
    else: 
        return render_template('signup.jsx') 
  
  
if __name__ == '__main__': 
    app.run(debug=False) 
    
    
