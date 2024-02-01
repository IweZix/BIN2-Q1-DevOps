# Les commandes

1. Initialiser un projet
```bash
git init
```

2. Cloner un projet
```bash
git clone [lien du repo]
```

3. commit du code
```bash
git commit -m "message de commit"
```

4. Avoir le statut du repo
```bash
git status
```

5. Envoyer du code dans le repo
```bash
git push
```

6. Mettre à jour son repo avec le repo distant
```bash
git pull
```

7. Récupérer le repo distant dans un nouvelle branche
```bash
git fetch
```

8. Créer une branche
```bash
git branche "nomDeLaBranche"
```

9. Faire une merge
```bash
git merge
```

10. Changer de branche
```bash
git checkout
```



# Gitignore
Le ``.gitignore`` est un fichier se trouvant à la racine du projet et permet d'éviter partager certain dossier, fichier ou extension de fichier.

Voici un [repo](https://github.com/github/gitignore) avec des templates.



# Stratégie Git

1. GitFlow
La stratégie GitFlow propose 5 branches : 
- __Main / Master / trunk :__ branche principale
- __Develop :__ branche de développement
- __Features :__ branches de fonctionnalités
- __Release :__ branches de releases suivant les version à partir de develop
- __HotFix :__ Branches fixant les bugs critiques en production
  
L'organisation des branches est très complexe dans cette stratégie.

2. Feature Branching
Stratégie très correct pour le déploiement continu. Une branche concerne une feature et ces dernières doivent être réalisable dans un cours délai. On y utilise les PR et MR

3. Trunk Based Development
Le principe est d'essayer d'utiliser uniquement la branche principale pour développer. Stratégie pratique pour le développement continu.

4. Forking
Le principe est de fork un repo. De cloner ce fork et ensuite y faire des modification pour ensuite push sur notre fork et proposer une pull request sur le repo "officiel".

5. Release Branches
La complexité de l'organisation des branches est élevée. Une branche par release. La fréquence de déploiement est lente.