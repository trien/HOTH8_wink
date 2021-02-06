use tienda;
CREATE TABLE TUser (
    idUser int NOT NULL,
    sLastName varchar(255) NOT NULL,
    sFirstName varchar(255),
    sdatebirth datetime,
    spassword datetime,
    semail varchar(255),
    saddress varchar(255),
    bActive bit,
    PRIMARY KEY (idUser)
);

CREATE TABLE TSesion (
    idSesion int NOT NULL,
    dFechaLogin datetime,
    idUser int,
    bActive bit,
    PRIMARY KEY (idSesion),
    FOREIGN KEY (idUser)REFERENCES TUser(idUser)
);


CREATE TABLE TEvent (
    idEvent int NOT NULL,
    sSubject varchar(255) NOT NULL,
    ddatecreation varchar(255),
    idUser int,
    PRIMARY KEY (idEvent),
    FOREIGN KEY (idUser)REFERENCES TUser(idUser)
);

CREATE TABLE TNeed (
    idNeed int NOT NULL,
    sheader varchar(255) NOT NULL,
    sbody varchar(255) NOT NULL,
    ddateCreation datetime,
    idUserCreator int,
    iValue int,
    bstate bit,
    PRIMARY KEY (idEvent),
    FOREIGN KEY (idUserCreator)REFERENCES TUser(idUser)
);

create table TUserPoints(
    idUser int,
    iPoints int,
    sOrigen varchar(255),
    ddateCreation datetime,
    idNeed int,
    idEvent int,
    FOREIGN KEY (idNeed)REFERENCES TUser(TNeed),
    FOREIGN KEY (idEvent)REFERENCES TEvent(TEvent)
);

create table TUserComment(
    idUser int,
    idNeed int,
    sComentario varchar(255),
    ddateCreation datetime,
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


