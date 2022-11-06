-- Criar database
create database hero;

-- Selecionar database
use hero;

-- Criar tabelas
create table Metrica (
idMetrica int primary key auto_increment,
voto int
);


create Table Classe (
idClasse int auto_increment,
primary key (idClasse,fkMetrica),
nomeClasse varchar(7), constraint chknomeClasse check (nomeClasse in ('suporte','dano','tanque')),
fkMetrica int,
foreign key (fkMetrica) references metrica (idMetrica)
);



create table Cadastro (
idCadastro int auto_increment,
primary key (idCadastro, fkClasse),
Apelido varchar (10),
email varchar(45), constraint chkemail check (email like '%@%'),
senha varchar (12),
confirmarSenha varchar (12),
fkClasse int,
foreign key (fkClasse) references classe (idClasse)
);


-- Inserir dados
insert into metrica values
(1,1),
(2,1),
(3,1),
(4,1);

insert into classe values
(null,'suporte',1),
(null,'dano',2),
(null,'tanque',3),
(null,'suporte',1);

insert into cadastro values 
(null,'vitor','vitor.pr@gmail.com','123','123',1),
(null,'saraxp','sara@gmail.com','123','123',2),
(null,'clara','clara@gmail.com','123','123',1),
(null,'alan','alan@gmail.com','123','123',3);


-- Selecionar tabelas
select * from cadastro;
select * from classe;
select * from metrica;

-- Selecionar cadastro, classe e metrica
select*From cadastro as c join classe as cl on c.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica;

--  Selecionar apelido, email, senha, confirmar senha, nomeClasse e voto das tabelas cadastro, classe e metrica.
select c.Apelido, c.email as 'E-mail',c.senha,c.confirmarSenha as 'Confirmar Senha', cl.nomeClasse as 'Classe', m.voto 'Voto' From cadastro as c join classe as cl on c.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica;

-- Somar votos da classe suporte
select sum(voto) as 'Total de Votos da classe Suporte'from metrica join classe on fkmetrica = idmetrica where nomeClasse = 'Suporte';

-- Somar votos da classe Dano
select sum(voto) as 'Total de Votos da classe Dano'from metrica join classe on fkmetrica = idmetrica where nomeClasse = 'dano';

-- Somar votos da classe Tanque
select sum(voto) as 'Total de Votos da classe Tanque'from metrica join classe on fkmetrica = idmetrica where nomeClasse = 'tanque';


