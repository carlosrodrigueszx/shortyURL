# shortyURL

Um encurtador de URLs.

## Requisitos Funcionais

1. Dado um url, o sistema deve gerar um "alias" curto e único nome/link. Esse link deve ser curto o suficiente para uma boa portabilidade entre aplicações.

2. Ao acessar o link curo, o usuário deve ser redirecionado para o link original.

3. Os links devem expirar após um intervalo padrão. 

4. O usuário poderá customizar um link para seu URL.


## Planos

### Convidado (anônimo)

- Gerar links únicos para uma dada URL;

- O link curto terá uma data de expiração de uma semana a partir do momento que foi criado;


### Conectado/logado

- Gerar links associados ao seu ID e mantê-los num histórico pessoal;

- Os links têm uma data de expiração de `um mês a partir do último clique`;


### Premium

Além dos benefícios acima listados, terá também:

- Acesso a estatísticas sobre seus links, como `número de cliques`, `onde o links estão sendo usados` e os ´dispositivos que acessam os links`. 

## Funções gratuitas

Função de encurtamento:

```
createURL(original_url)
```

- original_url (`string`):
URL a ser encurtada pelo usuário.

## Funções premium

Função de inserção:

```
createURL(api_dev_key, original_url,
custom_alias=none)
```

- api_dev_key (`string`): a chave ID que usaremos para limitar o usuário de acordo com sua cota.

- custom_url (`string` && `opcinal`): chave personalida opcinal para a URL.

- user_name (`string`): nome de usuário a ser usado na codificação.

- expire_date (`string`): data de expiração da URL curta.

Uma inserção bem sucedida retorna uma `string` contendo o link; caso contrário, retorna um código de erro.

## Esquema do Database

É preciso de duas tabelas: uma para armazenas informações sobre os mapeamentos de URL e outra para guardas as informações do usuário.

### URL
| Atributo         | Tipo     | Descrição|
| --------         | -----    | -------- |
| hash_code        | string   | PK       |
| original_url     | string   |          |
| criation_date    | datetime |          |
| expiration_date  | datetime |          |
| user_id          | uuint    | opcional |


### USER

| Atributo       | Tipo     | Descrição|
| --------       | -----    | -------- |
| user_id        | uuint    | PK       |
| name           | string   |          |
| email          | date     |          |
| creation_date  | datetime |          |
| last_login     | datetime |  |