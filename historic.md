Ajout du fichier database.sql avec le schéma complet pour Supabase.
Initialisation du projet Laravel avec React (Inertia.js/Breeze), installation des dépendances et configuration de Vite.
Configuration de Tailwind CSS avec la palette de couleurs et polices personnalisées, et ajout des styles globaux dans app.css.
Conversion des designs HTML en composants React (Dashboard, ClanView, WarView, DropsView, GamesView, AdminPanel) et création du layout commun.
Finalisation de la logique de base : Authentification (pseudo/password), Clans (création avec coût et adhésion) et Drops (claim atomique avec row locking). Tous vérifiés par des tests unitaires et fonctionnels.
Implémentation du panel admin : création de drops, déclenchement manuel de guerres, crédit de cristaux aux joueurs et validation de missions. Tous vérifiés par des tests.
Implémentation des fonctionnalités de jeu : Quiz (via OpenTrivia API), Paris (système de mise de cristaux) et Missions collectives (soumission de preuves).
Ajout de la commande de console 'wars:resolve' pour la résolution automatique des guerres via cron.
Implémentation du système de crafting de ressources en armes spéciales avec gestion des stocks de ressources par joueur.
