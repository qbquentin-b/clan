# direction.md — Jeu de Clans

## Contexte

Application web de jeu de clans compétitif. Stack : **Laravel (backend)** + **React/Vite (frontend)** + **Supabase (base de données)** + hébergement cPanel.

## Règle obligatoire

À chaque modification significative, tu dois écrire dans `historic.md` ce que tu as fait, en une ou deux phrases simples. Pas besoin de détailler — juste : quoi, pourquoi.

---

## Base de données — Supabase

La base de données est hébergée sur **Supabase** (PostgreSQL).

**Avant de commencer à coder**, tu dois générer un fichier `database.sql` contenant :
- La création de toutes les tables
- Les clés primaires, étrangères et index
- Les contraintes (unicité, valeurs par défaut, etc.)
- Les transactions et row locking nécessaires

Ce fichier sera exécuté directement sur Supabase.

---

## Frontend — UI Kit

Le design UI est fourni directement via Stitch. Intègre les composants tels quels en React sans modifier le style.

- Fonts : `Newsreader` (titres) + `Be Vietnam Pro` (corps/labels)
- Palette : bois foncé `#492811`, vert `#3c6704`, parchemin `#fff8f5`, ambre `#765a19`, rouge `#ad2b1f`
- Bottom nav fixe sur toutes les pages (Hub / Clan / Drops / Wars / Games)
- Composants clés : cadres bois avec rivets, cartes parchemin avec bords déchirés, boutons style enseigne

**Pages à convertir en composants React (une par fichier) :**

| Page | Composant React |
|---|---|
| Dashboard joueur | `Dashboard.jsx` |
| Clan Hall | `ClanView.jsx` |
| Guerre Screen | `WarView.jsx` |
| Drops / Bounty Board | `DropsView.jsx` |
| Mini-jeux / Taverne | `GamesView.jsx` |
| Admin Panel | `AdminPanel.jsx` |

---

## Backend — Fonctionnalités à implémenter

### Auth
- Inscription / connexion (pseudo + mot de passe)
- Token d'authentification pour chaque action critique

### Clans
- Créer un clan (coût : 50 cristaux, transaction atomique)
- Rejoindre un clan
- Vue clan : membres, cristaux, armes possédées

### Drops
- Claim atomique (transaction SQL + row locking) :
```sql
BEGIN TRANSACTION;
SELECT COUNT(*) FROM claims WHERE drop_id = :drop_id FOR UPDATE;
IF nb_gagnants < max_claims THEN
  INSERT INTO claims (drop_id, user_id) VALUES (:drop_id, :user_id);
  UPDATE users SET cristaux = cristaux + valeur WHERE id = :user_id;
END IF;
COMMIT;
```
- Types : cristaux, ressources, plans d'armes, boosts temporaires

### Guerres (lundi & jeudi)
- Puissance clan = Σ(points_guerre membres) + bonus armes − défenses
- Redistribution cristaux proportionnelle après guerre
- Reset points_guerre à 0 après conversion
- Résolution via cron PHP à horaire fixe

### Mini-jeux
- **Quiz** : banque de questions via OpenTrivia API (gratuite)
- **Paris** : côtes via API-Football + OpenWeatherMap (tiers gratuits) — mise collective ou individuelle — cristaux perdus brûlés — fallback validation manuelle admin si API down
- **Missions collectives** : soumission de preuves, validation admin, récompense au clan
- **Événements flash** : drop surprise (admin) + guerre éclair entre 2 clans volontaires

### Économie
- Cristaux : stock global limité, redistribution uniquement, pas de création infinie
- Ressources : fragments, métal, énergie, plans d'armes
- Crafting : ressources → armes spéciales
- Marché interne : échanges entre clans/joueurs

### Admin
- Créer/éditer drops
- Lancer guerres manuellement
- Créditer joueurs
- Valider soumissions missions
- Fallback manuel pour paris

---

## Ordre de dev

1. Générer `database.sql` et documenter le schéma
2. Setup Laravel + React/Vite + Tailwind + routing + connexion Supabase
3. Intégrer les composants React fournis via Stitch
4. Auth (inscription/connexion)
5. Clans (création, adhésion, vue)
6. Drops (claim atomique + transactions)
7. Guerres (calcul puissance + redistribution cristaux)
8. Crafting + armes
9. Mini-jeux (Quiz → Paris → Missions → Flash)
10. Admin panel
11. Classements

---

## URLs API externes (gratuites)

- Quiz : `https://opentdb.com/api.php?amount=10`
- Football : `https://api-football.com` (tier gratuit)
- Météo : `https://api.openweathermap.org` (tier gratuit)

---

## Sécurité

- Lock SQL + transactions sur toutes les actions économiques
- Rate limiting sur `/claim`, `/bet`, `/war`
- Pas de création de cristaux hors redistribution légitime
