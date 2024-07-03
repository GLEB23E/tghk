const cookie = () => {
    console.log('Initializing download script...');

    const button52 = document.getElementById("do");
    if (!button52) {
        console.error('Button with ID "do" not found.');
        return;
    }

    const urls = [
        "./assets/files/ГОСТ Р 54802-2011, Компрессоры поршневые.pdf",
        "./assets/files/ГОСТ 32569-2013, Технологический трубопровод.pdf",
        "./assets/files/Градостроительный кодекс.pdf",
        "./assets/files/ФЗ N 384, ТР безопасности зданий и сооружений.pdf",
        "./assets/files/ФЗ №116, Пром безопасность ОПО.pdf",
        "./assets/files/ФЗ №123, ТР Пожарн безопасность.pdf",
        "./assets/files/Постановление N 870 ТР о безопасности сетей газа.pdf",
        "./assets/files/Постановление №74, СанПиН.pdf",
        "./assets/files/Приказ МЧС №221, АЗС Пож. безопасность.pdf",
        "./assets/files/Постановление N 87 Разделы проектной документации.pdf",
        "./assets/files/ГОСТ 5542-2014, метан.pdf",
        "./assets/files/Приказ Ростехнадзор N 784 Утверждении Руководства ПБ тех трубопроводов.pdf",
        "./assets/files/ВРД 39-2.5-082-2003. Правила эксплуатации АГНКС..pdf",
        "./assets/files/СНиП 3.05.05-84, Технологическое оборудование и трубопроводы.pdf",
        "./assets/files/РД-3112199-1069-98 Автотр предп КПГ.pdf",
        "./assets/files/Ростехнадзор ФНП, ПБ АГНКС.pdf",
        "./assets/files/ФНП ПБ «ПРАВИЛА ПБ ОПО ОБОРУДОВАНИЕ, РАБОТАЮЩЕЕ ПОД ИЗБЫТОЧНЫМ ДАВЛЕНИ.pdf",
        "./assets/files/ГОСТ 27577-2000, метан КПГ.pdf"
    ];

    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

    const downloadFiles = async () => {
        for (const url of urls) {
            const link = document.createElement("a");
            link.href = url;
            link.download = url.split('/').pop(); // Extract file name from URL
            document.body.appendChild(link); // Append link to body
            link.click(); // Trigger download
            document.body.removeChild(link); // Remove link from body
            await delay(); // Wait for 1 second before next download
        }
    }

    button52.addEventListener('click', () => {
        console.log('Download button clicked.');
        downloadFiles();
    });
}

export default cookie;
