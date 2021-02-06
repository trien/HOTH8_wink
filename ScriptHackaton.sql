use tienda;
/*************************** Tables ***************************************/

CREATE TABLE TUser (
    idUser int NOT NULL AUTO_INCREMENT,
    sLastName varchar(255) NOT NULL,
    sFirstName varchar(255),
    sdatebirth datetime,
    spassword datetime,
    semail varchar(255),
    saddress varchar(255),
    bActive bit DEFAULT 1,
    PRIMARY KEY (idUser)
);

CREATE TABLE TSesion (
    idSesion int NOT NULL AUTO_INCREMENT,
    dFechaLogin datetime DEFAULT CURRENT_TIMESTAMP,
    idUser int,
    bActive bit default 1,
    PRIMARY KEY (idSesion),
    FOREIGN KEY (idUser) REFERENCES TUser(idUser)
);

CREATE TABLE TEvent (
    idEvent int NOT NULL AUTO_INCREMENT,
    sSubject varchar(255) NOT NULL,
    ddatecreation datetime default CURRENT_TIMESTAMP,
    idUser int,
    PRIMARY KEY (idEvent),
    FOREIGN KEY (idUser)REFERENCES TUser(idUser)
);

CREATE TABLE TNeed (
    idNeed int NOT NULL,
    sheader varchar(255) NOT NULL,
    sbody varchar(255) NOT NULL,
    ddateCreation datetime default CURRENT_TIMESTAMP,
    idUserCreator int,
    iValue int default 2,
    bstate bit not null default 1,
    PRIMARY KEY (idEvent),
    FOREIGN KEY (idUserCreator)REFERENCES TUser(idUser)
);

create table TUserPoints(
    idUser int,
    iPoints int,
    sOrigen varchar(255),
    ddateCreation datetime default CURRENT_TIMESTAMP,
    idNeed int,
    idEvent int,
    FOREIGN KEY (idNeed)REFERENCES TUser(TNeed),
    FOREIGN KEY (idEvent)REFERENCES TEvent(TEvent)
);

create table TUserComment(
    idUser int,
    idNeed int,
    sComentario varchar(255),
    ddateCreation datetime default CURRENT_TIMESTAMP ,
    iPoints int,
    FOREIGN KEY (idNeed)REFERENCES TUser(TNeed),
    FOREIGN KEY (idEvent)REFERENCES TEvent(TEvent)
);


DELIMITER //
CREATE PROCEDURE GetPointsPerUser(
	IN idUser int,OUT points INT
)
BEGIN
	SELECT iPoints into points 
 	FROM  TUserPoints
	WHERE idUser = idUser;
END //
DELIMITER ;

idUser int,
    iPoints int,
    sOrigen varchar(255),
    ddateCreation datetime,
    idNeed int,
    idEvent int,
    
DELIMITER //
CREATE PROCEDURE GainPointsPerEvent(
	IN idUser int,
    in idEvent int,
    in ipoints INT,
    out estado bit
)
BEGIN
   insert into TUserPoints(idUser,ipoints,idEvent,sOrigen)
   values(idUser,iPoints,idEvent,'EVENT');
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GainPointsPerNeed(
	IN idUser int,
    in idNeed int,
    in ipoints INT,
    out estado bit
)
BEGIN
   insert into TUserPoints(idUser,ipoints,idNeed,estado)
   values(idUser,iPoints,idEvent,'NEED');
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetUsers()
BEGIN
	SELECT *  	FROM  TUser
END$$
DELIMITER ;

DELIMITER //

CREATE PROCEDURE AddEvent(
	IN sSubject varchar(255),
    IN idUser int,
    IN spassword varchar(255),
    IN semail varchar(255),
    IN saddress varchar(255),
    out nEstado bit
)
BEGIN
	insert into TEvent(sSubject,idUser,spassword,semail,saddress)
    values(sSubject,idUser,spassword,semail,saddress);
    set nEstado=1;
END //
DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdEvent(
	IN idEvent int,
    IN sSubject varchar(255),
    IN idUser int,
    IN spassword varchar(255),
    IN semail varchar(255),
    IN saddress varchar(255),
    out nEstado bit
)
BEGIN
	update TEvent set sSubject=sSubject,
    idUser=idUser,
    spassword=spassword,
    se=semail,
	saddress=saddress
    where idEvent=idEvent
    ;
    set nEstado=1;
END //
DELIMITER ;

DELIMITER //

CREATE PROCEDURE AddNeed(
	IN sheader varchar(255),
    IN sbody varchar(255),
    IN idUserCreator varchar(255),
    IN iValue int,
    out nEstado bit
)
BEGIN
	insert into TNeed(sheader,sbody,idUserCreator,iValue)
    value(sheader,sbody,idUserCreator,iValue);
    set nEstado=1;
END //
DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdNeed(
	IN idNeed int,
    IN sheader varchar(255),
    IN sbody varchar(255),
    IN idUserCreator varchar(255),
    IN iValue int,
    out nEstado bit
)
BEGIN
	update TNeed set sheader=sheader,
    sbody=sbody,
    idUserCreator=idUserCreator,
    iValue=iValue
    where idNeed=idNeed;
    set nEstado=1;
END //
DELIMITER ;


DELIMITER //

CREATE PROCEDURE AddEvent(
	IN sSubject varchar(255),
    IN idUser int,
    IN ddatecreation datetime,
    out nEstado bit
)
BEGIN
	insert into TEvent(sSubject,idUser,ddatecreation)
    value(sSubject,idUser,ddatecreation);
    set nEstado=1;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE UpdEvent(
	IN idNeed int,
    IN sheader varchar(255),
    IN sbody varchar(255),
    IN idUserCreator varchar(255),
    IN iValue int,
    out nEstado bit
)
BEGIN
	update TNeed set sheader=sheader,
    sbody=sbody,
    idUserCreator=idUserCreator,
    iValue=iValue
    where idNeed=idNeed;
    set nEstado=1;
END //
DELIMITER ;



DELIMITER //
CREATE PROCEDURE CrearSesion(
	IN idUser int
)
BEGIN
insert into TSesion(idUser)values(idUser);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CreateComment(
	IN sComentario varchar(255),
    IN idUser int,
    IN idNeed int,
    out nEstado bit
)
BEGIN
	insert into TUserComment(sComentario,idUser,idNeed)
    value(sComentario,idUser,idNeed);
    set nEstado=1;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CreateComment(
	IN sComentario varchar(255),
    IN idUser int,
    out nEstado bit
)
BEGIN
	insert into TUserComment(sComentario,idUser)
    value(sComentario,idUser);
    set nEstado=1;
END //
DELIMITER ;
