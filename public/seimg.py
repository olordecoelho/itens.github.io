import requests
from bs4 import BeautifulSoup
import os
import json

def search_and_save_images_by_name(objects, target_size="3ac00x3ac00", save_dir="images"):
    os.makedirs(save_dir, exist_ok=True)

    for obj in objects:
        obj_id = obj["id"]
        obj_name = obj["nome"]  

        # Substitui espaços por "+" na URL de pesquisa
        search_term = obj_name.replace(" ", "+")
        url = f"https://www.google.com/search?q={search_term}&tbm=isch&tbs=isz:ex,iszw:{target_size.split('x')[0]},iszh:{target_size.split('x')[1]}"

        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')
        img_tags = soup.find_all('img')

        for img_tag in img_tags:
            img_url = img_tag.get('src')
            if img_url and img_url.startswith('http'):
                try:
                    img_data = requests.get(img_url).content
                    img_name = f"{obj_id}.jpg"
                    img_path = os.path.join(save_dir, img_name)
                    with open(img_path, 'wb') as f:
                        f.write(img_data)
                    print(f"Imagem salva: {img_name} (para {obj_name})")
                    break  # Sai do loop após salvar a primeira imagem
                except requests.exceptions.RequestException as e:
                    print(f"Erro ao baixar a imagem: {e}")

# Dados das armas e itens mágicos em formato de dicionário
ArmasDeCorte = [
    {"id": "ac001", "nome": "Adaga"},
    {"id": "ac002", "nome": "Foice"},
    {"id": "ac003", "nome": "Machado"},
    {"id": "ac004", "nome": "Espada curta"},
    {"id": "ac005", "nome": "Rapiera"},
    {"id": "ac006", "nome": "Claymore"},
    {"id": "ac007", "nome": "Espada bastarda"},
    {"id": "ac008", "nome": "Machado de guerra"},
    {"id": "ac009", "nome": "Espadão"},
    {"id": "ac010", "nome": "Tamahawk"},
    {"id": "ac011", "nome": "Kreigmesser"},
    {"id": "ac012", "nome": "Alabarda"},
    {"id": "ac013", "nome": "Machete"},
    {"id": "ac014", "nome": "Cimitarra"},
    {"id": "ac015", "nome": "Garras de aço"},
    {"id": "ac016", "nome": "Katana"},
    {"id": "ac017", "nome": "Kriss"}
]
ArmasDeImpacto = [
    {"id": "ai001", "nome": "Pau"},
    {"id": "ai002", "nome": "Martelo"},
    {"id": "ai003", "nome": "Varal"},
    {"id": "ai004", "nome": "Tacape"},
    {"id": "ai005", "nome": "Bastão de aço"},
    {"id": "ai006", "nome": "Martelo de guerra"},
    {"id": "ai007", "nome": "Manoplas"},
    {"id": "ai008", "nome": "Quebra crânios"},
    {"id": "ai009", "nome": "Chicote"},
    {"id": "ai010", "nome": "Munchako"},
    {"id": "ai011", "nome": "Soco inglês"},
    {"id": "ai012", "nome": "Maça"},
    {"id": "ai103", "nome": "Bolas de aço"}
]

ArmasDeDisparo = [
    {"id": "ad001", "nome": "Arco"},
    {"id": "ad002", "nome": "Balestra"},
    {"id": "ad003", "nome": "Shuriuken"},
    {"id": "ad004", "nome": "Funda"},
    {"id": "ad005", "nome": "Arco composto"},
    {"id": "ad006", "nome": "Lança"},
    {"id": "ad007", "nome": "Pau de fogo"},
    {"id": "ad008", "nome": "Lança chamas"},
    {"id": "ad009", "nome": "Arpão"},
    {"id": "ad0010", "nome": "Mini bombas"},
    {"id": "ad0011", "nome": "Bumerangue"},
    {"id": "ad0012", "nome": "Bumerangue de aço"},
    {"id": "ad0013", "nome": "Dardos"}
]

ArmasMagicas = [
    {"id": "am001", "nome": "Anel piromante"},
    {"id": "am002", "nome": "Anel hidromante"},
    {"id": "am003", "nome": "Anel elétromante"},
    {"id": "am004", "nome": "Anel geomante"},
    {"id": "am005", "nome": "Anel aeromante"},
    {"id": "am006", "nome": "Anel plantomante"},
    {"id": "am007", "nome": "Anel criomante"},
    {"id": "am008", "nome": "Anel magnetomante"},
    {"id": "am009", "nome": "Anel hiperomante"},
    {"id": "am010", "nome": "Anel umbramante"},
    {"id": "am011", "nome": "Cajado condutor"},
    {"id": "am012", "nome": "Orbe de contenção"}
]

ItensMagicos = [
    {"id": "im001", "nome": "Runa de mana"},
    {"id": "im002", "nome": "Orbe de mana"}
]


search_and_save_images_by_name(ArmasDeCorte)
search_and_save_images_by_name(ArmasDeImpacto)
search_and_save_images_by_name(ArmasDeDisparo)
search_and_save_images_by_name(ArmasMagicas)
search_and_save_images_by_name(ItensMagicos)
