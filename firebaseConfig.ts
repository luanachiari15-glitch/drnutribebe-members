
/**
 * INSTRUÇÕES PARA CONEXÃO COM O FIREBASE:
 * 
 * 1. Crie um projeto no console do Firebase (https://console.firebase.google.com/)
 * 2. Ative o Authentication (Email/Senha)
 * 3. Ative o Firestore Database
 * 4. Obtenha suas credenciais no menu "Configurações do Projeto"
 * 5. Instale o firebase SDK: npm install firebase
 * 6. Substitua o conteúdo deste arquivo e as funções em authContext.tsx
 * 
 * Exemplo de configuração:
 * 
 * import { initializeApp } from "firebase/app";
 * import { getAuth } from "firebase/auth";
 * import { getFirestore } from "firebase/firestore";
 * 
 * const firebaseConfig = {
 *   apiKey: "SUA_API_KEY",
 *   authDomain: "SEU_PROJETO.firebaseapp.com",
 *   projectId: "SEU_PROJETO",
 *   storageBucket: "SEU_PROJETO.appspot.com",
 *   messagingSenderId: "SENDER_ID",
 *   appId: "APP_ID"
 * };
 * 
 * const app = initializeApp(firebaseConfig);
 * export const auth = getAuth(app);
 * export const db = getFirestore(app);
 */

export const IS_MOCK_MODE = true;
