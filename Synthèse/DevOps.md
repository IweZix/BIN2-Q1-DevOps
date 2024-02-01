# DevOps
# Différence méthode agile et waterfall

1. Cycle de développement :
Méthode agile : Les fonctionnalités sont développées et livrées par petites itérations.
Méthode waterfall : Le développement est linéaire -> conception, développement, tests, déploiement.

La méthode agile fonctionne petit à petit. On fait une fonctionnalité, on la test et on réitère. tandis que la méthode waterfall on développe tout, on test et puis de déploie. 

2. eXtreme programming
- Pull request : Permet à l'équipe de relire le code avant la merge, permet de discuter de la meilleur solutions pour résoudre un problème.
- Pair programming : Le principe est d'avoir 2 devs pour un clavier, une personne qui tape et une qui review
- mob programming : Le principe est d'avoir un seul clavier pour tout une équipe. Très utle lors des phases délicate du développement.

3. Pratique de l'XP
- Le poker programming
- L'Intégration continue
- Les petites releases
- Les tests fonctionnels
- Les tests unitaires
- Le refactoring

4. Le diagramme DevOps
- Plan : planification des tâches de développement, fonctionnalités et des versions.
- Code : écrire le code
- Build : transformation du code en éxécutable
- Test : automatisation des tests (unitaire, intégration,...)
- Release : Publication d'un version jugée stable et prête à la production
- Deploy : déploiement de la dernière release
- Operate : Surveillance des perfs, gestions des incidents,...
- Monitor : Surveillance de la production du projet

5. Faire un repo azure
Créer [ici](https://aex.dev.azure.com/me?mkt=fr-FR)
Créer localement le projet
```bash
git init
git branch -M main
git add .
git commit -m "init"
// commande de azure en ssh
git remote add origin [lien ssh]
git push -u origin --all
```

6. créer une static web app
Créer [ici](https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2FStaticSites)
