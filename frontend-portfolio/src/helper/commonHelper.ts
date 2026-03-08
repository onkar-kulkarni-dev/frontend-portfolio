const CommonHelper = {
    getTotalExperience(startDateStr: string) {
        const start = new Date(startDateStr);
        const now = new Date();
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }
        return `${years}.${months} Years`;
    }
}

export default CommonHelper;
