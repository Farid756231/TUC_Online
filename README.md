

# Förutsättningar
Ladda ner och installera .NET SDK.
Ladda ner och installera Node.js.
Ladda ner och installera SQLite.
En .env-fil för backend (se nedan för mer information).

# Instruktioner
1. Klona ner projektet
2. Öppna TUC_Online mappen och öppna sedan "TUC_Online.sln" med VS
3. Ladda ner eller skapa en .env-fil i tuc_backend.
4. Skickar link till env-filen om du vill slippa skapa den själv. (OBS! Glöm ej lägga till punkt i början av env-filen, exmeplar: .env)
env Download Link: https://www.mediafire.com/file/79xdsnmn1aad1xt/.env/file
5. Kopiera dessa kod i .env-filen.
# ---------------------------------------------------------------
SECRET=JWTRefreshTokenHIGHsecuredPasswordVVVp1OH7Xzyr
TOKENVALIDATION=1
REFRESHTOKENDAYS=7
ISSUER=http://localhost:5268/
AUDIENCE=http://localhost:5268/
JWT_SECRET_EXPIRES=15
DB_CONNECTION_STRING=DataSource=./tuc_backend/sqlite.db;
# --------------------------------------------------------------------
6. Öppna upp Visual studio code.
7. Navigera till tuc_frontend och öppna cmd(terminalen)
8. npm install
9. npm start
10. Klart nu - Nu ska allt fungera och sidan ska synas.