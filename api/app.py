from flask import Flask, request, redirect
from flask_cors import CORS
from user_agents import parse
import requests
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)
token = os.environ.get('TOKEN', 'None')
print(token)
def get_ip_data(ip):
    if token == "None":
        return None
    url = f"https://ipinfo.io/{ip}?token={token}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return None
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        try:
            user_agent = parse(request.headers.get('User-Agent'))
            client_ip = request.headers.get('X-Real-IP') or request.headers.get('X-Forwarded-For') or request.remote_addr
            ip_data = get_ip_data(client_ip)
            if ip_data is not None:
                if 'city' not in ip_data:
                    ip_data['city'] = None
                if 'country' not in ip_data:
                    if ip_data['city'] == "Prague":
                        ip_data['country'] = "CZ"
                    ip_data['country'] = None
                if 'timezone' not in ip_data:
                    ip_data['timezone'] = None
            return{
                    "success": True,
                    "device": user_agent.device.family or None,
                    "os": user_agent.os.family or None,
                    "osVersion": user_agent.os.version_string or None,
                    "browser": user_agent.browser.family or None,
                    "ip": client_ip or None,
                    "state": ip_data['country'] or None,
                    "city": ip_data['city'] or None,
                    "timezone": ip_data['timezone'] or None
                }
        except Exception as e:
            return {
                'success': False,
                'message': f'Something went wrong -> {e}'
            }
    else:
        redirect_url = "https://kaktusgame.eu/error.html?code=403"
        return redirect(redirect_url, code=302)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)