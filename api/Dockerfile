FROM ubuntu

RUN apt-get update && apt-get upgrade -y && apt-get install -y python3 python3-pip

ENV TOKEN "None"

WORKDIR /app
COPY . /app

RUN pip3 install --no-cache-dir -r requirements.txt
EXPOSE 5000

CMD ["python3", "app.py"]