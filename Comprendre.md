# Comprendre

Essayez de synthétiser en binôme votre compréhension de la notion que vous avez vue (s'il s'agissait de plusieurs notions, vous pouvez répéter ce paragraphe plusieurs fois) : 
- Quel est son rôle ? 

Le rôle de l'asynchrone est d'executer certaines parties du code en marge du reste du code.


- Quel est son intérêt ?

Contrairement au synchrone qui execute ligne par ligne le code et qui donc attend que la ligne precedente soit executee pour lancer la suivante, l'asynchrone permet de continuer l'execution du programme sans attendre l'execution de la ligne asynchrone precedente.

Exemples :
- Permet de prioriser l'execution de fontions asynchrones interdependantes : par exemple nous devons d'abord executer la fonction fetch avant de pouvoir console.log le resultat de cette requete
- Permet de ne pas bloquer l'execution du code synchrone :  Sans cette possibilité de réaliser des appels asynchrones, une application JavaScript serait condamnée à bloquer le navigateur le temps de son exécution et le reste du script.

- A-t-elle des désavantages ? 

?

- Y a-t-il plusieurs façons de s'en servir ? 

1) Callbacks
C'est une fonction qui a pour argument une autre fonction. 
Par exemple :

function A(callback){
	callback()
}

function B(){
	xxxx
}

A(B)

La fonction A doit attendre que la fonction B soit executee.

Limite : le « callback hell »
Gestion des erreurs avec des boucles if else qui rendent le code illisible et très difficile à gérer et à maintenir.

2) Promises
Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone. Il y a 3 etats possibles :
- pending
- resolved (success)
- rejected (error)

Au lieu d'avoir une fonction avec 2 callbacks en argument, on fait une fonction qui renvoie une promesse a laquelle on attache 2 callbacks

function toto(){
	return new Promise((resolve, reject)=>{
		Taches asynchrones a realiser
		Appel de resolve() si success
		Appel de reject() si error
	})
} 

const promise = toto();
promise.then(resolve,reject);

Avantages :
- Les callbacks ne seront jamais appelés avant la fin du parcours de la stack
- Les callbacks ajoutés grâce à then seront appelés, y compris après le succès ou l'échec de l'opération asynchrone
- Plusieurs callbacks peuvent être ajoutés en appelant then plusieurs fois, ils seront alors exécutés l'un après l'autre selon l'ordre dans lequel ils ont été insérés.
- Chainage des promesses : permet d'executer les promesses les unes à la suite des autres grace a la methode then() et la methode catch() qui permet de gerer les erreurs

3) Async & Await

Cette methode permet d'eviter le callback hell.
Une fonction asynchrone renvoie toujours une promise et await attend que la fonction promise du dessus soit resolue.

const nomfonction  = async () =>{
	try {
	const res = await fonction1();
	console.log(res);
	}
	catch(e) { console.log(e);
	}	
}

- Quelles sont les étapes importantes pour la mettre en place ? 

- Quelles sont les nuances d'un langage à l'autre ?

- Existe-t-il des contextes (langages, environnements, outils) où elle n'existe pas ? 

- Quelles sont ses alternatives ? 

=> Pour entretien :
Expliquer
Afin de préparer votre échange avec l’encadrante, voici une liste de termes à savoir expliquer :

####Callback :

- En termes simples: un callback est une fonction qui doit être exécutée après qu’une autre fonction ait fini de s’exécuter - d’où le nom «call back».

- De maniere plus complexe, en JS, les fonctions sont des objets. Pour cette raison, les fonctions peuvent prendre d'autres fonctions comme arguments et peuvent être "returned" par d'autres fonctions.

- Les callbacks sont un moyen de s’assurer que certaines parties du code ne s’exécutent pas tant qu’une autre partie du code n’est pas déjà terminée.

####Promesses :

- Une promesse est un objet qui peut produire une valeur unique dans le futur : soit une valeur résolue, soit une raison pour laquelle elle n’a pas été résolue (par exemple, une erreur réseau s’est produite). Une promesse peut être dans l'un des 3 états possibles: realisee, rejetée ou en attente. Les utilisateurs de promesses peuvent y ajouter des callbacks pour gérer la valeur realisee ou la raison du rejet.

-Enchaînement de promesses :
Comme .then () renvoie toujours une nouvelle promesse, il est possible d'enchaîner les promesses avec un contrôle précis sur la manière et le moment de traitement des erreurs. Les promesses vous permettent d’imiter le comportement try / catch du code synchrone normal.

####This
"This" fait référence à une nouvelle instance

- Lorsqu'une fonction est appelée avec le mot-clé new, la fonction est appelée fonction "constructor" et renvoie une nouvelle instance. Dans de tels cas, la valeur de this fait référence à une instance nouvellement créée.
- En JavaScript, la propriété d'un objet peut être une méthode ou une simple valeur. Lorsqu'une méthode d'objet est appelée, alors "this" fait référence à l'objet qui contient la méthode appelée.
- En resume : par défaut, "this" fait reference a un objet global, qui est global dans le cas de NodeJS et d'un objet window dans le cas d'un navigateur.
  Lorsqu'une méthode est appelée en tant que propriété d'un objet, alors "this" fait référence à l'objet parent.
  Lorsqu'une fonction est appelée avec le "new operator", alors this fait référence à l'instance nouvellement créée.
  Lorsqu'une fonction est appelée à l'aide des méthodes call et apply, alors "this" fait référence à la valeur transmise comme premier argument de la méthode call ou apply

####Bind

- La méthode bind retourne une nouvelle méthode avec "this" faisant référence au premier argument passé.

####Requête
- JavaScript utilise des événements et des callbacks pour gérer les requetes asynchrones.
- La structure des événements et des callbacks est le mécanisme fondamental par lequel JS est capable de gérer efficacement les tâches qui se chevauchent, comme répondre aux demandes d'I / O.
- Dans le navigateur client, les callbacks permettent au code JavaScript de passer un "call" dont la réponse peut prendre beaucoup de temps, comme un "call" d'API de service Web, sans «geler» la page Web pendant qu'elle attend une réponse.
- Dans les applications côté serveur, comme celles exécutées sur Node.js, c'est la structure des événements et des callbacks qui permet d'utiliser efficacement JavaScript pour les applications qui nécessitent par nature beaucoup de multitâche asynchrone, comme les serveurs Web.

####Évènement
- JavaScript dans le navigateur utilise un modèle de programmation base sur les "events".
Tout commence par suivre un "event".
L'event peut être le chargement du DOM, ou une requête asynchrone qui termine la récupération, ou un utilisateur cliquant sur un élément ou l'utilisation des touches sur le clavier.
Il existe de nombreux types d'événements différents : onclick, onload, onmouseover, onmouseout, onunload. => Ce sont des addEventListener() ce qui repond a la notion suivante.
####Listener
