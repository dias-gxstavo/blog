
--- 
title: 'Serviços que rodam no meu servidor pessoal (homelab)' 
date: 2026-07-27 
---
# Introdução
Bem, meu primeiro homelab foi criado através de um Raspberry PI 4 4gb. Suas especificações estão disponíveis na imagem abaixo:

![raspberry](https://amazn-personal-blog.s3.us-east-1.amazonaws.com/Screenshot+From+2026-07-27+15-10-28.png)

# Especificações
Todo o acesso é feito via SSH, através dos meus computadores pessoais. Falando nisso, quando puder farei um post sobre boas práticas de SSH para homelabs simples. 

Além disso, todos os serviços rodam 24/7 através de arquivos `docker-compose`. Poder manter o Raspberry ativo a todo tempo com certeza é um dos principais benefícios dessa família de dispositivos, pois o custo de energia é bem discreto se comparado a um computador normal/minicomputador

## Serviços disponíveis:

Há cerca de 20 serviços ativos no meu servidor. Normalmente, o percentual de uso de CPU da máquina não passa dos 30%.

Além do próprio [Homarr](https://github.com/homarr-labs/homarr), que é o serviço que permite criar dashboards dos seus serviços disponíveis como este da imagem abaixo, as principais funcionalidades incluem:

- **Vaultwarden:** Fork open-source do Bitwarden para uso self-hosted. 
- **Pi-Hole e Unbound:** Filtro DNS em rede. Útil para bloquear anúncios infelizes
- **Immich:** Meu Google Cloud pessoal
- **Grafana c/ Prometheus**: Stack de observalidade que me permite monitorar a saúde da máquina e dos serviços rodando em containers. 

![homarr](https://amazn-personal-blog.s3.us-east-1.amazonaws.com/homelab.png)

