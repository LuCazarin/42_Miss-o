#!/bin/bash

if [ $# -eq 0 ]; then
	echo "Nenhum argumento foi passado"
	exit 1
fi

for arg in "$@"; do
	pasta_nome="ex$arg"

	if [ -d "$pasta_nome" ]; then
	 echo "Pasta '$pasta_nome' já existe. Ignorando..."
	else
	 mkdir "$pasta_nome"
	 if [ $? -ne 0]; then
		 echo "Erro ao criar pasta '$pasta_nome'"
		 exit 1
         fi
	fi
done
