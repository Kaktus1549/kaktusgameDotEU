#!/bin/bash

clear
base64 -d <<< "CiAgICAsKi0uICAgICAgIC8kJCAgIC8kJCAgICAgICAgICAgLyQkICAgICAgICAgLyQkICAgICAgICAgICAgICAgICAgICAgICAgICAvJCQkJCQkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsKi0uICAKICAgIHwqIHwgICAgICB8ICQkICAvJCQvICAgICAgICAgIHwgJCQgICAgICAgIHwgJCQgICAgICAgICAgICAgICAgICAgICAgICAgLyQkX18gICQkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKnwKLC4gIHwgKnwgICAgICB8ICQkIC8kJC8gICAvJCQkJCQkIHwgJCQgICAvJCQgLyQkJCQkJCAgIC8kJCAgIC8kJCAgLyQkJCQkJCR8ICQkICBcX18vICAvJCQkJCQkICAvJCQkJCQkLyQkJCQgICAvJCQkJCQkICAgLC4gIHwqIHwKfCp8X3wqIHwgLC4gICB8ICQkJCQkLyAgIHxfX19fICAkJHwgJCQgIC8kJC98XyAgJCRfLyAgfCAkJCAgfCAkJCAvJCRfX19fXy98ICQkIC8kJCQkIHxfX19fICAkJHwgJCRfICAkJF8gICQkIC8kJF9fICAkJCAgfCp8X3wgKnwgLC4KYC0tLS4qIHxffCp8ICB8ICQkICAkJCAgICAvJCQkJCQkJHwgJCQkJCQkLyAgIHwgJCQgICAgfCAkJCAgfCAkJHwgICQkJCQkJCB8ICQkfF8gICQkICAvJCQkJCQkJHwgJCQgXCAkJCBcICQkfCAkJCQkJCQkJCAgYC0tLS4gKnxffCp8CiAgICB8ICouLS1gICAgfCAkJFwgICQkICAvJCRfXyAgJCR8ICQkXyAgJCQgICB8ICQkIC8kJHwgJCQgIHwgJCQgXF9fX18gICQkfCAkJCAgXCAkJCAvJCRfXyAgJCR8ICQkIHwgJCQgfCAkJHwgJCRfX19fXy8gICAgICB8KiAuLS1gCiAgICB8ICp8ICAgICAgfCAkJCBcICAkJHwgICQkJCQkJCR8ICQkIFwgICQkICB8ICAkJCQkL3wgICQkJCQkJC8gLyQkJCQkJCQvfCAgJCQkJCQkL3wgICQkJCQkJCR8ICQkIHwgJCQgfCAkJHwgICQkJCQkJCQgICAgICB8ICp8CiAgICB8ICp8ICAgICAgfF9fLyAgXF9fLyBcX19fX19fXy98X18vICBcX18vICAgXF9fXy8gICBcX19fX19fLyB8X19fX19fXy8gIFxfX19fX18vICBcX19fX19fXy98X18vIHxfXy8gfF9fLyBcX19fX19fXy8gICAgICB8KiB8CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5IEtha3R1czE1NDkK"
echo " "

echo "Welcome to KaktusGame installation script!"
echo "This script will guide you through the installation process."
echo "Please make sure you have Docker and Docker Compose installed. If you want leave default values, just press Enter."
echo ""

echo "Backend configuration"
echo "----------------------"
echo ""

read -sp "Enter token for IPInfo API (default: empty): " TOKEN
TOKEN=${TOKEN:-""}
echo " "
read -p "Enter port for backend (default: 5000): " BACKEND_PORT
BACKEND_PORT=${BACKEND_PORT:-5000}
read -p "Enter URL for backend (default: https://kaktusgame.eu/api): " BACKEND_URL
BACKEND_URL=${BACKEND_URL:-"https://kaktusgame.eu/api"}

clear
base64 -d <<< "CiAgICAsKi0uICAgICAgIC8kJCAgIC8kJCAgICAgICAgICAgLyQkICAgICAgICAgLyQkICAgICAgICAgICAgICAgICAgICAgICAgICAvJCQkJCQkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsKi0uICAKICAgIHwqIHwgICAgICB8ICQkICAvJCQvICAgICAgICAgIHwgJCQgICAgICAgIHwgJCQgICAgICAgICAgICAgICAgICAgICAgICAgLyQkX18gICQkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKnwKLC4gIHwgKnwgICAgICB8ICQkIC8kJC8gICAvJCQkJCQkIHwgJCQgICAvJCQgLyQkJCQkJCAgIC8kJCAgIC8kJCAgLyQkJCQkJCR8ICQkICBcX18vICAvJCQkJCQkICAvJCQkJCQkLyQkJCQgICAvJCQkJCQkICAgLC4gIHwqIHwKfCp8X3wqIHwgLC4gICB8ICQkJCQkLyAgIHxfX19fICAkJHwgJCQgIC8kJC98XyAgJCRfLyAgfCAkJCAgfCAkJCAvJCRfX19fXy98ICQkIC8kJCQkIHxfX19fICAkJHwgJCRfICAkJF8gICQkIC8kJF9fICAkJCAgfCp8X3wgKnwgLC4KYC0tLS4qIHxffCp8ICB8ICQkICAkJCAgICAvJCQkJCQkJHwgJCQkJCQkLyAgIHwgJCQgICAgfCAkJCAgfCAkJHwgICQkJCQkJCB8ICQkfF8gICQkICAvJCQkJCQkJHwgJCQgXCAkJCBcICQkfCAkJCQkJCQkJCAgYC0tLS4gKnxffCp8CiAgICB8ICouLS1gICAgfCAkJFwgICQkICAvJCRfXyAgJCR8ICQkXyAgJCQgICB8ICQkIC8kJHwgJCQgIHwgJCQgXF9fX18gICQkfCAkJCAgXCAkJCAvJCRfXyAgJCR8ICQkIHwgJCQgfCAkJHwgJCRfX19fXy8gICAgICB8KiAuLS1gCiAgICB8ICp8ICAgICAgfCAkJCBcICAkJHwgICQkJCQkJCR8ICQkIFwgICQkICB8ICAkJCQkL3wgICQkJCQkJC8gLyQkJCQkJCQvfCAgJCQkJCQkL3wgICQkJCQkJCR8ICQkIHwgJCQgfCAkJHwgICQkJCQkJCQgICAgICB8ICp8CiAgICB8ICp8ICAgICAgfF9fLyAgXF9fLyBcX19fX19fXy98X18vICBcX18vICAgXF9fXy8gICBcX19fX19fLyB8X19fX19fXy8gIFxfX19fX18vICBcX19fX19fXy98X18vIHxfXy8gfF9fLyBcX19fX19fXy8gICAgICB8KiB8CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5IEtha3R1czE1NDkK"
echo " "

echo "Frontend configuration"
echo "----------------------"
echo ""

read -p "Enter port for frontend (default: 3000): " FRONTEND_PORT
FRONTEND_PORT=${FRONTEND_PORT:-3000}
read -p "Enter URL for frontend (default: https://kaktusgame.eu): " FRONTEND_URL
FRONTEND_URL=${FRONTEND_URL:-"https://kaktusgame.eu"}
read -p "Enter kill switch password (default: killEv3r1thing): " KILL_SWITCH_PASSWORD
KILL_SWITCH_PASSWORD=${KILL_SWITCH_PASSWORD:-"killEv3r1thing"}


cat << EOF > ./Frontend/.env
API_URL=$BACKEND_URL
URL=$FRONTEND_URL
KILL_SWITCH_PASSWORD=$KILL_SWITCH_PASSWORD
KILL_SWITCH=false

EOF

cd Docker

cat << EOF > .env
BACKEND_PORT=$BACKEND_PORT
FRONTEND_PORT=$FRONTEND_PORT
TOKEN=$TOKEN
URL=$FRONTEND_URL

EOF

docker compose build
docker compose up -d