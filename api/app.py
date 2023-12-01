from flask import Flask, request, redirect
from flask_cors import CORS
from user_agents import parse
import requests
import os

app = Flask(__name__)
CORS(app)
token = os.environ.get('TOKEN', "None")

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
            ip_data = get_ip_data("89.103.132.145")
            if ip_data is not None:
                if 'city' not in ip_data:
                    ip_data['city'] = None
                if 'country' not in ip_data:
                    ip_data['country'] = None
                if 'timezone' not in ip_data:
                    ip_data['timezone'] = None
                return{
                    "success": True,
                    "device": user_agent.device.family,
                    "os": user_agent.os.family,
                    "osVersion": user_agent.os.version_string,
                    "browser": user_agent.browser.family,
                    "ip": request.remote_addr,
                    "state": ip_data['country'],
                    "city": ip_data['city'],
                    "timezone": ip_data['timezone']
                }
            else:
                return {
                    "success": True,
                    "device": user_agent.device.family,
                    "os": user_agent.os.family,
                    "osVersion": user_agent.os.version_string,
                    "browser": user_agent.browser.family,
                    "ip": request.remote_addr,
                    "country": None,
                    "city": None,
                    "timezone": None
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
    app.run()