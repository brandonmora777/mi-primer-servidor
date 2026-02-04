#!/bin/bash
# Script de Automatización de Build Profesional

echo "PROCESO DE DEPLOYMENT INICIADO"

# 1. Limpieza
echo "Limpiando versiones anteriores..."
rm -rf dist/ && mkdir dist

# 2. Construcción (Build)
echo "Compilando y moviendo artefactos a ./dist..."
cp src/app.js dist/
cp config/env.json dist/
sleep 1 
# 3. Verificación de Integridad
if [ -f "dist/app.js" ]; then
    echo "EXITOSO: Artefacto listo en la carpeta dist/"
else
    echo "ERROR: Falló la construcción del paquete"
    exit 1
fi
