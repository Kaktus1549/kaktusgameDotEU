FROM python:3.11.7

ENV TOKEN "None"

WORKDIR /app
COPY . /app

RUN pip3 install --no-cache-dir -r requirements.txt
EXPOSE 5000

CMD ["python3", "app.py"]