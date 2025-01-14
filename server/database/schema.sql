create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  pseudo VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  zip_code INT,
  city VARCHAR(30),
  user_password VARCHAR(30) NOT NULL,
  avatar VARCHAR(255),
  is_gcu_accepted BOOL NOT NULL DEFAULT FALSE
);

create table photo (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  content text,
  picture varchar(255) not null
);

insert into user(firstname, lastname, pseudo, email, zip_code, city, user_password, avatar, is_gcu_accepted)
values
  ("Jacqueline", "Morin", "jijimomo_95", "jacquelinecomptabilite@sah.fr", "69001", "Lyon", "ilovecomptabilite", NULL, TRUE),
  ("René", "Pichard", "pich-art", "rene_pich-art@sah.fr", "69002", "Lyon", "rene_explorateur", NULL, TRUE),
  ("Pépito", "Perez", "pepito_roi_du_gateau", "p-p@sah.fr", "69003", "Lyon" ,"perezforever", NULL, TRUE);

insert into photo(title, content, picture)
values
  ("Mosaique Ememem, rue de la bourse, Lyon 2e", "À partir de petit carreaux, l'artiste urban Ememem construit des
              mosaïques ou des 'pancements de trous' (comme il les appelle) pour
              vétir la rue des couleurs. Dans ce mosaïque en blanc et noir nous
              trouvons une sorte de jeu qui fait penser aux mots fléchés. Pour
              connaître plus sur cet artiste, rdv dans son site web :
              https://www.ememem-flacking.com/ et sur ses réseaux sociaux.", "Ememem.jpg"),
  ("Hommage à Keith Haring, pont Morand, Lyon 1er", "Dans le cadre de la Boucle du Ruban Rouge et de la Conférence du
              Fonds Mondial de lutte contre le sida qui s'est déroulé à Lyon les
              9 et 10 octobre 2019, (RED) et la Métropole se sont associés pour
              développer une campagne de Street Art. 'Pour cette œuvre, Faile
              rend hommage à Keith Haring, artiste légendaire, activement engagé
              dans la lutte contre le sida, révélé aux Lyonnais lors d’une
              rétrospective présentée en 2008, au Musée d’Art Contemporain'", "faile-morand.jpg"),
  ("Vol du Ara, Kalouf et Chopper, rue Villon, Lyon 8ème", "« L’œuvre représente le symbole de liberté au travers de ce ARA
              vert (ARA MILITARIS). L’espèce est menacée d’extinction à l’état
              sauvage à cause de son plumage vivement coloré et victime du
              trafic d’animaux. Il est souhaitable pour les générations futures
              que nous préservions le vivant. Les oiseaux jouent un rôle très
              important et sont indispensables pour la vie sur terre. Laisse la
              nature intacte, n’y prends rien sauf une photo. » KALOUF", "kalouf-fresque.jpg");
  
  

