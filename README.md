# Vitessce OMICS Viewer Template

Working repo and Github pages build for the VITESSCE OMICS Viewer, leveraging objects storage in AWS S3.

## Prior to using this repo

1. Prepare single cell data, via Pancreatlas (gitlab) project's `data/omics/` scripts
2. `10-convert-rds-to-h5a.R` to convert RDS to H5AD
3. `11-convert-h5a-to-zarr.py` to convert H5AD to Zarr
4. Upload Zarr to S3 bucket

## How to use this repo

1. Clone repo
2. Edit `src/my-view-config.js` to point to appropriate S3 bucket and object params
3. Edit `public/index.html` page TITLE and DESCRIPTION
4. For local testing, open terminal:
    ```bash
    cd src
    npm install # most likely
    npm start
    ```
5. Open browser to `http://localhost:3000`
6. Edit and test as needed
7. Pushing to repo will use GH actions to build the React app

## Fork for new dataset / Vitessce instance

1. Fork this repo into a new repo
2. Name it based on `vitessce-` as prefix, ex. `vitessce-Elgamal_et_al_Diabetes_2023`
3. Edit the following files:
   - [ ]  `package.json` + `package-lock.json` and update `name` and `homepage` values
   - [ ]  `src/my-view-config.js` to point to appropriate S3 bucket and object params
   - [ ]  Actions > Enable Github Actions
   - [ ]  Settings > Pages > Source > Change to Github Actions
   - [ ]  Wait for build, then get Settings > Pages > URL, and copy/paste it into main page description area
4. Test
5. Add URL to metadata loader
