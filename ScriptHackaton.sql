use tienda;
/*Table TUser*/
/*drop table TUser;*/
CREATE TABLE TUser (
	idUser int,
    semail varchar(255),
    sLastName varchar(255) NOT NULL,
    sFirstName varchar(255),
    sdatebirth varchar(10),
    spassword varchar(50),
    saddress varchar(255),
    sPosition varchar(255),
    bActive bit DEFAULT 1,
    PRIMARY KEY (semail)
);
/*Data for table TUser*/
insert into TUser(idUser,sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values(1,"Smith",'John','01-01-1980','123456','jsmith@company.es','Str Johannes 123','Finantial Manager',1);
insert into TUser(idUser,sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values(2,"White",'Charles','01-01-1991','123456','cwhite@company.es','Str Johannes 123','Analyst Finantial Junior I',1);
insert into TUser(idUser,sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values(3,"Johnes",'Marie','10-02-1983','123456','mjohnes@company.es','Str Johannes 123','Analyst Finantial Junior II',1);
insert into TUser(idUser,sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values(4,"Diaz",'Carlos','11-03-1986','123456','cdiaz@company.es','Str Johannes 123','Analyst Finantial Junior I',1);
insert into TUser(sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values(5,"Tarrie",'Adrien','14-04-1989','123456','atarrie@company.es','Str Johannes 123','Finantial Intership',1);

/*Table TSesion*/
CREATE TABLE TSesion (
    idSesion int NOT NULL,
    dDateLogin varchar(10),
    idUser int,
    bActive bit default 1,
    PRIMARY KEY (idSesion),
    FOREIGN KEY (idUser) REFERENCES TUser(idUser)
);
/*Data Sesion*/
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(1,'06-02-2021',1,0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(2,'06-02-2021',1,0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(3,'06-02-2021',3,0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(4,'06-02-2021',1,0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(5,'04-02-2021',2,0);
/*Table Event*/
CREATE TABLE TEvent (
    sNameEvent varchar(255) NOT NULL,
    sInfoEvent varchar(1000),
    dDateEvent varchar(10),
    idUserResponsable int,
    PRIMARY KEY (sNameEvent,dDateEvent),
    FOREIGN KEY (idUserResponsable)REFERENCES TUser(idUser)
);
/*Data Event*/
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('CARLOS BIRTHDAY EVENT','The event will start at 05:00 pm and everybody is invited',
'07-02-2021',1);
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('CITY CARNVAL VIRTUAL MEETING','The event will start at 04:00 pm and everybody is invited',
'12-02-2021',1);
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('LETS CELEBRATE PROJECT FINISH','The event will start at 05:00 pm, we gonna have some gifts',
'07-02-2021',1);
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('VALENTINES DAYS CELEBRATE FRIENDSHIP ','The event will start at 06:00 pm we have chocolate',
'14-02-2021',1);

/*Table Need*/
CREATE TABLE TNeed (
    sNameNeed varchar(255) NOT NULL,
    sBody varchar(1000) NOT NULL,
    dDateCreation varchar(10),
    idUserCreator int,
    iValue int default 2,
    sTag varchar(500),
    bstate bit not null default 1,
    PRIMARY KEY (sNameNeed,idUserCreator),
    FOREIGN KEY (idUserCreator)REFERENCES TUser(semail)
);
/*data*/
insert into TNeed(sNameNeed,sBody,dDateCreation,idUserCreator,iValue,stag,bstate)
values('PROBLEMS DEPLOYING CODE IN NEW SOURCE',
'I got problems making a deploy in the new code, have it happend to someone before?',
'06-02-2021',2,10,'Important,sos,java',1);

insert into TNeed(sNameNeed,sBody,dDateCreation,idUserCreator,iValue,stag,bstate)
values('HOW CAN WE IMPROVE THE PROCESS IN SECTOR 1',
'As it has been showed since time ago we got a problem with the slow process in sector 1',
'06-02-2021',2,20,'Important,sos,java',1);

/*Table points*/
create table TUserPoints(
    idUser varchar(255),
    iPoints int,
    sComentario varchar(10000),
    sNombre varchar(255),
    idUserCreator varchar(255),
    dDateEvent varchar(10),
    sTipo varchar(10),
    FOREIGN KEY (idUser)REFERENCES TUser(semail),
    FOREIGN KEY (idUserCreator)REFERENCES TUser(semail)
);
/*Data Points events*/
insert into TUserPoints(idUser,iPoints,sComentario,sNombre,idUserCreator,dDateEvent,sTipo)
values(1,10,NULL,'CITY CARNAVAL VIRTUAL MEETING',1,'12-02-2021','EVENT');

insert into TUserPoints(idUser,iPoints,sComentario,sNombre,idUserCreator,dDateEvent,sTipo)
values(1,5,NULL,'CARLOS BIRTHDAY EVENT',1,'07-02-2021','EVENT');

insert into TUserPoints(idUser,iPoints,sComentario,sNombre,idUserCreator,dDateEvent,sTipo)
values(4,10,'You have to replace the route 1 add the correct path',
'PROBLEMS DEPLOYING IN THE PROJECT CODE',1,NULL,'NEED');

insert into TUserPoints(idUser,iPoints,sComentario,sNombre,idUserCreator,dDateEvent,sTipo)
values(4,10,'We should automatize the reception proces that way people should not come physically',
'HOW CAN WE IMPROVE THE PROCESS IN SECTOR 1',1,NULL,'NEED');

