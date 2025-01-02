create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null
);

insert into user(firstname, lastname)
values
  ("Jacqueline", "Morin"),
  ("René", "Pichard"),
  ("Pépito", "Perez");