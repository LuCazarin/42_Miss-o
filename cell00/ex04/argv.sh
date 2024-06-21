
#!/bin/bash

limite=3
contador=0

while [ $# -gt 0 ]; do
  if [ $contador -ge $limite ]; then
    echo "Erro: Número máximo de argumentos ($limite) atingido."
    break
  fi

  arg="$1"
  echo "Argumento $contador: $arg"
  ((contador++))
  shift
done

if [ $contador -eq 0 ]; then
  echo "Nenhum argumento fornecido."
fi