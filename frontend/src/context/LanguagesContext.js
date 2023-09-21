const { useState } = require("react");

export const LanguagesContext = React.createContext();
LanguagesContext.displayName = 'Languages';

export const LanguageProvider = ({ children }) => {
    const [translation, setTranslation] = useState([]);
    
    const url = 'caminho/para/translations.json';

    async function loadTranslations() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro ao carregar JSON: ${response.status}`);
            }

            const translations = await response.json();

            const tituloEmPortugues = translations.titulo.pt;
            const tituloEmIngles = translations.titulo.en;

            console.log('Título em Português:', tituloEmPortugues);
            console.log('Título em Inglês:', tituloEmIngles);
        } catch (error) {
            console.error('Erro ao carregar JSON de traduções:', error);
        }
    }

    

    return (
        <LanguagesContext.Provider
            value={{

            }}
        >
            {children}
        </LanguagesContext.Provider>
    )
}