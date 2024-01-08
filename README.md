<h1 align="center">
  <br>
  <img src=./imgs/readIMG.png width="350"></a>
  <br>
  C.R.U.D de Contatos
  <br>
</h1>

<h4 align="center">Um simples CRUD de Contatos feito para praticar habilidades.</h4>

<p align="center">
  
</p>

<p align="center">
  <a href="#Conexão-com-o-Banco-de-Dados">Conexão com o Banco de Dados:</a> •
  <a href="#Como-funciona">Como Funciona:</a> 
  •
  <a href="#Ferramentas-usadas">Ferramentas usadas</a> 

</p>

<p align="center"><img src=./imgs/gif.gif width="1000"></a>
  <br></p>




## Conexão com o Banco de Dados   

É necessário incluir a URL do MongoDB Atlas para estabelecer a conexão com o banco de dados. A presença dessa URL é crucial para garantir a correta interação e acesso aos dados armazenados no MongoDB Atlas:
```bash

async function dbConection() {
  await mongoose.connect(process.env.MONGO_URL);
}

```
Crie um arquivo .env e personalize sua MONGO_URL:

```bash

MONGO_URL=Sua URL

```

## Como funciona

<h3>Criar contato:</h3>

Este é um exemplo do Schema para um contato em formato JSON:

```bash

{
	"name": "Cleber",
	"age": 19,
	"address": "Terra do Nunca",
	"email": "cleber@gmail.com"
}

```

Os dados, após serem submetidos à rota de criação de contatos (/createContacts), passam por validações básicas antes de serem aprovados. 

```bash
async function contactValidations(req,res,next){
if (!req.body.name) return res.status(422).json({ message: "O nome é obrigatório!" });

if (!req.body.age) return res.status(422).json({ message: "A idade é obrigatória!" });

if (!req.body.address) return res.status(422).json({ message: "O endereço é obrigatório!" });

if (!req.body.email) return res.status(422).json({ message: "O email é obrigatório!" });
    
/*Checando se o email já foi registrado */

const contactExist = await Contact.findOne({ email: req.body.email });
if (contactExist) return res.status(422).json({ message: "Este Email já está em uso!" });
    
    next();
  
  }

```
Posteriormente, são encaminhados para o ContactController, onde todo o processo de criação de contato é executado, incluindo a persistência das informações no banco de dados.

<h3>Listar contatos:</h3>

No processo de listar contatos, recebemos uma requisição e o método do Mongoose faz toda a mágica 😎

```bash

async function listContacts(req,res) {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (error) {
    console.log("Erro ao listar contatos!", error);
    res.status(500).json({ message: "Erro ao listar contatos!" });
  }
}

```

<p align="center"><img src=./readmeIMGS/gif4.gif width="1000"></a>
  <br></p>

> **Nota:**
> Um array vazio é retornado quando não temos nenhum contato criado!.



<h3>Deletar ou atualizar um contato:</h3>

Para iniciar o processo, é necessário que o ID do contato seja enviado como parâmetro na URL.

✍:
<p align="center"><img src=./imgs/gif222.gif width="1000"></a>
  <br></p>

🗑:
  <p align="center"><img src=./imgs/gif3.gif width="1000"></a>
  <br></p>


## Ferramentas usadas:

-[Node](https://nodejs.org/en) 
-[Express](https://expressjs.com/pt-br/)
-[Mongo DB](https://www.mongodb.com/pt-br/atlas)
-[Mongoose](https://mongoosejs.com/)


## License

MIT

---