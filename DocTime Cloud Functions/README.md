# DocTime  Cloud Functions


These are cloud functions for

1.Sending Welcome Email when user Authenticate for first time

2.Index & Uindex doctor data when add to firestore . (upload to algolia account 'docotors')

3.Create User database when he first login

4.Delete user database when we remove for user from authentication



Note : 
While creating your own cloud functions  make "firebase.json" 
change \"functions" with your functions directore name

```ts
{
  "functions": {
    "predeploy": [
      "npm --prefix \"functions\" run lint",
      "npm --prefix \"functions\" run build"
    ]
  }
}
```
