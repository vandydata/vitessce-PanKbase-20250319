export const myViewConfig = {
    "name": "Vittesce OMICS vieweer",
    "version": "1.0.4",
    "description": "",
    "datasets": [
          {
              "uid": "A", 
              "name": "Elgamal et al, Diabetes 2023", 
              "files": [
                  {
                      "fileType": "anndata.zarr", 
                      "url": "https://cds-pancreatlas-public.s3.us-east-1.amazonaws.com/PanKbasemin.cells0.01pct_min.features5pct_rmDoublets_harmony_data.zarr/", 
                      "options": {
                          "obsEmbedding": [
                              {
                                  "path": "obsm/X_umap", 
                                  "dims": [0, 1], 
                                  "embeddingType": "UMAP"
                              }, 
                              {
                                  "path": "obsm/X_pca", 
                                  "dims": [0, 1],
                                  "embeddingType": "PCA"
                              }
                          ], 
                          "obsSets": [
                              {
                                  "name": "Cell Types", 
                                  "path": "obs/celltypes"
                              }
                          ],
                          "obsFeatureMatrix": {
                              "path": "X"
                          }
                      }
                  }
              ]
          }
      ], 
      "coordinationSpace": {
          "dataset": {"A": "A"}, 
          "embeddingType": {"A": "UMAP"}
      }, 
      "layout": [
          {
              "component": "scatterplot", 
              "coordinationScopes": {
                  "dataset": "A", 
                  "embeddingType": "A"
              }, 
              "x": 0.0, 
              "y": 0.0, 
              "w": 8.0, 
              "h": 8.0
          }, 
          {
              "component": "obsSets", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 8.0, 
              "y": 0.0, 
              "w": 4.0, 
              "h": 4.0
          }, 
          {
              "component": "featureList", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 8.0, 
              "y": 4.0, 
              "w": 4.0, 
              "h": 4.0
          }, 
          {
              "component": "obsSetFeatureValueDistribution", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 6.0, 
              "y": 8.0, 
              "w": 6.0, 
              "h": 4.0
          }, 
          {
              "component": "obsSetSizes", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 0.0, 
              "y": 8.0, 
              "w": 6.0, 
              "h": 4.0
          }
      ], 
      "initStrategy": "auto"
  }         
