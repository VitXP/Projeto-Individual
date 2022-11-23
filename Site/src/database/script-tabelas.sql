-- Criar database
create database if not exists hero;

-- Selecionar database
use hero;

-- Criar tabelas
create table if not exists Funcao (
idFuncao int primary key auto_increment,
descricao varchar(200)
);

create table if not exists Classe (
idClasse int auto_increment,
primary key (idClasse,fkFuncao),
nomeClasse varchar(7), constraint chknomeClasse check (nomeClasse in ('suporte','dano','tanque')),
fkFuncao int,
foreign key (fkFuncao) references funcao (idFuncao)
);


create table if not exists Usuario (
idUsuario int auto_increment,
primary key (idUsuario, fkClasse),
nome varchar (10) not null,
email varchar(45), constraint chkemail check (email like '%@%'), 
senha varchar (256)  not null,
fkClasse int,
foreign key (fkClasse) references classe (idClasse)
);


-- Inserir dados Funçao
insert into Funcao values
(1,' Heróis de suporte fortalecem seus aliados, pois são capazes de curá-los, protegê-los com escudos, aumentar seu poder de dano e imobilizar os inimigos.'),
(2,'Heróis de dano são responsáveis por procurar, atacar e aniquilar inimigos, valendo-se de uma ampla variedade de ferramentas, habilidades e estratégias.'),
(3,'Heróis desse tipo são especializados em proteger e dar cobertura à seus aliados, tirar o foco de inimigos e ocupar a linha de frente.');


-- Inserir dados Classe
insert into classe values
(null,'suporte',1),
(null,'dano',2),
(null,'tanque',3);


-- Selecionar tabelas
select * from usuario;
select * from classe;
select * from funcao;

--  Selecionar apelido, email, senha, nomeClasse e voto das tabelas cadastro, classe.
select  u.nome, u.email as 'E-mail',u.senha, cl.nomeClasse as 'Classe', f.descricao as 'Descrição' From usuario as u join classe as cl on u.fkclasse = cl.idclasse join funcao as f on f.idfuncao = cl.fkfuncao order by u.nome;

-- metrica gráfica
select c.nomeClasse as 'Classe', count(*) as votos from usuario u join classe c on u.fkClasse = c.idClasse group by c.nomeClasse;
