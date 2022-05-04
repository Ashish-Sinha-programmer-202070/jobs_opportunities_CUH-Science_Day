create database intership;

create table department(
    dept_id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
    dept_name VARCHAR(200) NOT NULL UNIQUE
);

create table users(
    user_id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    dept_id BIGINT REFERENCES department(dept_id),  -- foreig key
    skills TEXT,
    password TEXT NOT NULL; 
);

create table intership_details(
    intern_id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    company VARCHAR(200),
    skill_set TEXT,
    deadline DATE,
    offcial_link TEXT,
    on_campus VARCHAR(3),
    company_img text,
    batch_year int
);

-- department data
insert into department(dept_name) VALUES ('CSE'),('CIVIL'),('EE'),('PPT'),('RLM'),('BMS'),('BCA'),('MCA'),('BSC'),('MSC');

--users data
insert into users(first_name,last_name,gender,email,dept_id,skills,password)
VALUES ('asld','sakd','male','fkds@fha.cim',1,'jsadfjoasdfjasiofisa','asldi'),
 ('asdkj','wiuef','female','lu@fsdj.co',3,'asdfoi','asdofi'),
 ('weoif','nfoiwe','male','asn@kjf.com',6,'aslf','asfd');

 -- Intership data
 insert into intership_details(title,description,company,skill_set,deadline,offcial_link,on_campus)
 VALUES ('faosidjo','askdfoasdjfsosd','oaisjd','aflsidu','2022-02-01','aslkdfhasldif','yes'),
 ('fasdflo','afdsfe','sgfdg','afdsfdf','2022-01-23','aasdifj','no'),
 ('laifejf','jafoiesjf','afewe','afsdfe','2022-01-14','saofijd','yes');