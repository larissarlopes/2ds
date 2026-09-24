from conexao import conectar

de cadastrar_carta (
    nome, descricao, efeito, ataque, defesa, crtico ):
conectar()
sql ="""
INSERT INTO carta 
(nome, descricao, efeito, ataque, desefa, critico)
"""

cadastrar_carta (
    "carta ex", "descricao ex", "efeito ex", 10, 20, 100)
