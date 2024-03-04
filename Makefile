.PHONY: build up down logs db-shell

build:
	@docker-compose build

up:
	@docker-compose up -d

down:
	@docker-compose down

logs:
	@docker-compose logs -f

db-shell:
	@docker-compose exec db psql -U yourusername -d yourdbname

db-setup:
	@docker-compose exec db /bin/sh -c 'psql -U root -d concept -f /sql/articles.sql'
	@docker-compose exec db /bin/sh -c 'psql -U root -d concept -f ./sql/laws-create.sql'
clear-cash:
	@docker system prune -a
