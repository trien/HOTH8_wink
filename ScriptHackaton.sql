use tienda;
/*Table TUser*/
/*drop table TUser;*/
CREATE TABLE TUser (
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
insert into TUser(sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values("Smith",'John','01-01-1980','123456','jsmith@company.es','Str Johannes 123','Finantial Manager',1);
insert into TUser(sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values("White",'Charles','01-01-1991','123456','cwhite@company.es','Str Johannes 123','Analyst Finantial Junior I',1);
insert into TUser(sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values("Johnes",'Marie','10-02-1983','123456','mjohnes@company.es','Str Johannes 123','Analyst Finantial Junior II',1);
insert into TUser(sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values("Diaz",'Carlos','11-03-1986','123456','cdiaz@company.es','Str Johannes 123','Analyst Finantial Junior I',1);
insert into TUser(sLastName,sFirstName,sdatebirth,spassword,semail,saddress,sPosition,bActive)
values("Tarrie",'Adrien','14-04-1989','123456','atarrie@company.es','Str Johannes 123','Finantial Intership',1);

/*Table TSesion*/
CREATE TABLE TSesion (
    idSesion int NOT NULL,
    dDateLogin varchar(10),
    idUser varchar(255),
    bActive bit default 1,
    PRIMARY KEY (idSesion),
    FOREIGN KEY (idUser) REFERENCES TUser(semail)
);
/*Data Sesion*/
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(1,'06-02-2021','jsmith@company.es',0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(2,'06-02-2021','cwhite@company.es',0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(3,'06-02-2021','mjohnes@company.es',0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(4,'06-02-2021','jsmith@company.es',0);
insert into TSesion(idSesion,dDateLogin,idUser,bActive)
values(5,'04-02-2021','cwhite@company.es',0);
/*Table Event*/
CREATE TABLE TEvent (
    sNameEvent varchar(255) NOT NULL,
    sInfoEvent varchar(1000),
    dDateEvent varchar(10),
    idUserResponsable varchar(255),
    PRIMARY KEY (sNameEvent,dDateEvent),
    FOREIGN KEY (idUserResponsable)REFERENCES TUser(semail)
);
/*Data Event*/
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('CARLOS BIRTHDAY EVENT','The event will start at 05:00 pm and everybody is invited',
'07-02-2021','cwhite@company.es');
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('CITY CARNVAL VIRTUAL MEETING','The event will start at 04:00 pm and everybody is invited',
'12-02-2021','cwhite@company.es');
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('LETS CELEBRATE PROJECT FINISH','The event will start at 05:00 pm, we gonna have some gifts',
'07-02-2021','jsmith@company.es');
insert into TEvent(sNameEvent,sInfoEvent,dDateEvent,idUserResponsable)
values('VALENTINES DAYS CELEBRATE FRIENDSHIP ','The event will start at 06:00 pm we have chocolate',
'14-02-2021','jsmith@company.es');
/*Points for event*/
create table TUserPointsEvent(
    idUser varchar(255),
    iPoints int,
    sNombre varchar(255),
    dDateEvent varchar(255),
    FOREIGN KEY (idUser)REFERENCES TUser(semail)
);
/*Data Points events*/
insert into TUserPointsEvent(idUser,iPoints,sNombre,dDateEvent)
values('jsmith@company.es',10,'CITY CARNAVAL VIRTUAL MEETING','12-02-2021');
insert into TUserPointsEvent(idUser,iPoints,sNombre,dDateEvent)
values('jsmith@company.es',5,'CARLOS BIRTHDAY EVENT','07-02-2021');

/*Table Need*/
CREATE TABLE TNeed (
    sNameNeed varchar(255) NOT NULL,
    sBody varchar(1000) NOT NULL,
    dDateCreation varchar(10),
    idUserCreator varchar(255),
    iValue int default 2,
    sTag varchar(500),
    bstate bit not null default 1,
    PRIMARY KEY (sNameNeed,idUserCreator),
    FOREIGN KEY (idUserCreator)REFERENCES TUser(semail)
);
insert into TNeed(sNameNeed,sBody,dDateCreation,idUserCreator,iValue,stag,bstate)
values('PROBLEMS DEPLOYING CODE IN NEW SOURCE',
'I got problems making a deploy in the new code, have it happend to someone before?',
'06-02-2021','cwhite@company.es',10,'Important,sos,java',1);

insert into TNeed(sNameNeed,sBody,dDateCreation,idUserCreator,iValue,stag,bstate)
values('HOW CAN WE IMPROVE THE PROCESS IN SECTOR 1',
'As it has been showed since time ago we got a problem with the slow process in sector 1',
'06-02-2021','cwhite@company.es',20,'Important,sos,java',1);

/*Table date points need*/
create table TUserPointsNeed(
    idUser varchar(255),
    iPoints int,
    sComentario varchar(10000),
    sNombre varchar(255),
    idUserCreator varchar(255),
    FOREIGN KEY (idUser)REFERENCES TUser(semail),
    FOREIGN KEY (idUserCreator)REFERENCES TUser(semail)
);
/*Data*/
insert into TUserPointsNeed(idUser,iPoints,sComentario,sNombre,idUserCreator)
values('cdiaz@company.es',10,
'You have to replace the route 1 add the correct path',
'PROBLEMS DEPLOYING IN THE PROJECT CODE','cwhite@company.es');
insert into TUserPointsNeed(idUser,iPoints,sComentario,sNombre,idUserCreator)
values('cdiaz@company.es',10,
'We should automatize the reception proces that way people should not come physically',
'HOW CAN WE IMPROVE THE PROCESS IN SECTOR 1','cwhite@company.es');
