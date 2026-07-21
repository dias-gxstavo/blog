
--- 
title: 'Vaults remotos com minIO self-hosted e Remotely Sync no Obsidian' 
date: 2026-07-20 
---
# Introdução
O Obsidian é um ótimo produto pra escrever notas, pensamentos e lista de afazeres. No entanto, seu serviço de sincronização entre dispositivo é disponibilizado somente com o Obsidian Sync, que é pago.

```compose.yml
services:
      minio:
        image: quay.io/minio/minio:RELEASE.2025-04-22T22-12-26Z
        ports:
          - "9000:9000"
          - "9001:9001"
        command: [ "server", "--console-address", ":9001", "/data" ]
        volumes:
          - data-minio:/data
        environment:
          MINIO_ROOT_USER: MINIO_USER
          MINIO_ROOT_PASSWORD: MINIO_PASSWORD
    
    volumes:
        data-minio:
```

### Observações

*   Porta `9000` = API S3 (é essa que o Remotely Save vai usar)
*   Porta `9001` = console de administração web
*   Troque o volume `/caminho/no/host/minio-data` por um diretório real no seu servidor, para persistir os dados
*   A imagem `quay.io/minio/minio:RELEASE.2025-04-22T22-12-26Z` deve ser utilizada devido ao fato de que as versões **latest** do minIO não trazem mais configurações de administrador.

**2\. Acessar o console**

Abra `http://SEU_IP:9001` no navegador e faça login com o usuário/senha definidos no arquivo `compose.yml`.

**3\. Criar um bucket**

No console, vá em **Buckets → Create Bucket** e dê um nome para seu bucket .

**4\. Criar uma Access Key**

Vá em **Access Keys → Create Access Key**. Isso vai gerar um `Access Key` e um `Secret Key`. Essas duas chaves devem ser guardadas para serem utilizadas posteriormente no Obsidian

### Configurando o Remotely Save

**5\. Instalar o plugin**

No Obsidian: Busque por **“Remotely Save”** nos plugins da comunidade e ative-o.

**6\. Escolher o serviço remoto**

Abra as configurações do plugin e selecione **S3** (ou “S3 compatible”) como serviço.

**7\. Preencher os dados de conexão**

*   **Endpoint**: `http://SEU_IP:9000` (ou `https://seu-dominio.com` se configurado com proxy ou tunnel)
*   **Region**: pode deixar `us-east-1` (MinIO não valida região, mas o campo é obrigatório)
*   **Access Key ID**: o que você gerou no passo 4
*   **Secret Access Key**: idem
*   **Bucket Name**: nome do bucket criado anteriormente
*   Habilite a opção de **“Path style”**.

**8\. Cheque a conexão** ![check](https://amazn-personal-blog.s3.us-east-1.amazonaws.com/Screenshot+From+2026-07-20+22-12-58.png)

**9\. E finalmente, sincronize!**

Clique no ícone de sincronização ou use o comando via paleta (`Ctrl/Cmd+P` → “Remotely Save: start sync”).

**Observações**: 
*   O processo de sincronização deve ser feito em todos os dispositivos que compartilham o vault, como um `git pull` rotineiro