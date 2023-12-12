import { Component } from '@angular/core';

@Component({
  selector: 'app-brute-force',
  templateUrl: './brute-force.component.html',
  styleUrls: ['./brute-force.component.css']
})
export class BruteForceComponent {

  password: string = '';
  analysisResult: string = '';
  suggestedPassword: string = '';

  analyzePassword() {
    // Ajoutez ici la logique pour évaluer la force du mot de passe
    // Utilisez this.password pour accéder au mot de passe saisi par l'utilisateur
    const lengthScore = this.password.length >= 8 ? 1 : 0;
    console.log(lengthScore);
    const uppercaseScore = /[A-Z]/.test(this.password) ? 1 : 0;
    const lowercaseScore = /[a-z]/.test(this.password) ? 1 : 0;
    const digitScore = /\d/.test(this.password) ? 1 : 0;
    const specialCharScore = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.password) ? 1 : 0;

    const complexityScore = lengthScore + uppercaseScore + lowercaseScore + digitScore + specialCharScore;

    if (complexityScore >= 5) {
      console.log(complexityScore);
      this.analysisResult = 'Password is strong.';
      this.suggestedPassword = '';
    } else {
      this.analysisResult = 'Password is weak.';

      // Generate a suggested strong password
      this.suggestedPassword = this.generateStrongPassword();
    }
  }
  generateStrongPassword(): string {
    // Logic to generate a strong password (customize as needed)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;<>,.?~\\/-';
    let password = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }


  //-------------------------------------------


  // Injections


  //check is user logged in already
  ngOnInit(): void {


  }
}
