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



create table Usuario (
idUsuario int auto_increment,
primary key (idUsuario, fkClasse),
nome varchar (10),
email varchar(45), constraint chkemail check (email like '%@%'),
senha varchar (12),
fkClasse int,
foreign key (fkClasse) references classe (idClasse)
);

-- Inserir dados
-- Inserir dados
insert into metrica values
(1,1),
(2,1),
(3,1);

insert into classe values
(null,'suporte',1),
(null,'dano',2),
(null,'tanque',3);



-- Selecionar tabelas
select * from usuario;
select * from classe;
select * from metrica;

-- Selecionar cadastro, classe e metrica
select*From usuario as c join classe as cl on c.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica;

--  Selecionar apelido, email, senha, nomeClasse e voto das tabelas cadastro, classe e metrica.
select  u.nome, u.email as 'E-mail',u.senha, cl.nomeClasse as 'Classe', m.voto 'Voto'  From usuario as u join classe as cl on u.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica;

-- Somar votos da classe suporte
select sum(voto) From usuario as c join classe as cl on c.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica  where nomeClasse = 'suporte'; 

-- Somar votos da classe Dano
select sum(voto) From usuario as c join classe as cl on c.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica  where nomeClasse = 'dano'; 

-- Somar votos da classe Tanque
select sum(voto) From usuario as c join classe as cl on c.fkclasse = cl.idclasse join metrica as m on cl.fkmetrica = m.idmetrica  where nomeClasse = 'tanque'; 


