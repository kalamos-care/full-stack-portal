FROM python:3.8

WORKDIR /app

RUN apt-get update -y && \
        apt-get install -y --no-install-recommends libpq-dev && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8888", "-k", "uvicorn.workers.UvicornWorker", "app.main:app"]