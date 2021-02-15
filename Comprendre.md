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
