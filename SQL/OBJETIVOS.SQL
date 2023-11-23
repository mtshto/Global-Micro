-- RM88415 - VITOR TORRES DANTAS
-- RM88430 - MATHEUS DE OLIVEIRA

drop table objetivos;

CREATE TABLE objetivos (

    id VARCHAR(10),
    objetivos_global VARCHAR(200),
    objetivos_brasil VARCHAR(200),
    codigo_indicador VARCHAR(10),
    descricao VARCHAR(200)
      
);

insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.2','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.2.1','Taxa de mortalidade em menores de 5 anos');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.2','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.2.2','Taxa de mortalidade neonatal');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.3','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.3.2','Taxa de incidência da tuberculose');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.3','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.3.3','Taxa de Incidência da malária');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.3','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.3.4','Taxa de incidência de hepatite B');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.3','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.3.5','Número de pessoas que necessitam de intervenção contra doenças tropicais negligenciadas (DTN)');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.4','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.4.1','Taxa de mortalidade atribuída a doenças cardiovasculares, câncer, diabetes ou doenças respiratórias crônicas');

insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.4','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.4.2','Taxa de mortalidade por suicídio por ano');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.5','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.5.2','Taxa de Consumo de álcool per capita');

insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.6','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.6.1','Taxa de mortalidade por acidentes de trânsito');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.7','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.7.2','Número de nascidos vivos de mães adolescentes');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.8','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.8.2','Proporção de pessoas em famílias com grandes gastos em saúde em relaçăo ao total de despesas familiares');

insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.9','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.9.2','Taxa de mortalidade atribuída a fontes de água inadequadas');
    
insert into objetivos(id,objetivos_global,objetivos_brasil,codigo_indicador, descricao) 
    values('3.9','Até 2030, reduzir a taxa de mortalidade', 'Até 2030, reduzir a razão de mortalidade','3.9.3','Taxa de mortalidade atribuída a intoxicação não intencional');
