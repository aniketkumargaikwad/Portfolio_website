import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'The ATM Machine',
      summary: 'An Interface which works exactly same as actual ATM Machine has been developed. Where one can login and check balance, withdraw money, add money, transfer money. If you login for the first time you need to create account first, using that credentials you can login and perform the required actions.',
      description: 'This project is a console-based ATM application developed in Java, designed to exemplify high-quality software architecture through a commitment to SOLID principles and the integration of key design patterns. The application provides a secure, user-friendly environment for users to register, authenticate, and perform essential banking functions, such as checking balances, depositing funds, withdrawing cash, and transferring money to other users. Each user is authenticated against a basic user repository, with dummy entries simulating a database, ensuring only registered users can access the system’s service The system’s architecture follows the Singleton pattern to maintain a single instance of the ATM class, which controls the application flow, preventing duplication and conserving resources. The Command pattern is used to encapsulate each banking operation (such as balance checks and transfers) within its own command class, thereby decoupling the application’s control flow from its business logic. This approach enhances maintainability and extensibility, allowing additional commands to be introduced without modifying the core functionality. An optional Factory pattern can be implemented to further extend the application’s scalability, allowing it to support different account types and operations with minimal code adjustments. Adhering to SOLID principles ensures that the project is structured in a way that promotes modularity and flexibility. Each class serves a distinct purpose, demonstrating the Single Responsibility Principle (SRP), while the Open/Closed Principle (OCP) is maintained by allowing for the seamless addition of new features. The Command classes implement the Command interface, embodying the Liskov Substitution Principle (LSP) and enabling commands to be swapped or extended without affecting the system’s functionality. Additionally, the interface is kept lean and specific, in line with the Interface Segregation Principle (ISP), and the project maintains loose coupling by depending on abstractions, as recommended by the Dependency Inversion Principle (DIP). Overall, this ATM console application showcases a thoughtful design with a focus on modular, scalable code, making it an exemplary model for real-world, maintainable Java applications.',
      projectLink: 'https://github.com/aniketkumargaikwad/LLD_ATM_MACHINE',
      tags: [Tag.SYSTEM_DESIGN, Tag.LLD, Tag.JAVA, Tag.OOPS],
      pictures: []
    },
    {
      id: 2,
      name: 'ParkingLot System',
      summary: 'Developed a command-line parking lot management system that efficiently handles vehicle parking, slot allocation, and ticket generation with a capacity of 2 floors and 6 slots per floor.',
      description: 'Developed a comprehensive command-line parking lot management system designed to handle various functions, including vehicle parking, slot allocation, and ticket generation, with an initial capacity of 2 floors and 6 slots per floor. This system incorporates a robust object-oriented design adhering to SOLID principles, ensuring a scalable and maintainable architecture that can easily accommodate additional vehicle types and complex parking requirements. By utilizing the Factory Design Pattern, the system is optimized for seamless vehicle creation based on type, enhancing flexibility for future enhancements. The parking allocation algorithm prioritizes the nearest available slots by floor and slot number, minimizing search times and streamlining the user experience. Key features include functionality for displaying free and occupied slots by floor, detailed tracking through custom ticket IDs, and an intuitive command-based interface for user-friendly operation.',
      projectLink: '',
      tags: [Tag.SYSTEM_DESIGN, Tag.LLD, Tag.JAVA, Tag.OOPS],
      pictures: []
    },
    {
      id: 3,
      name: 'Text Encryption System',
      summary: 'This command-line Java application generates a unique alphanumeric code for any input text, enabling quick encoding and decoding. Users can retrieve original messages from codes, ensuring secure and accessible message handling.',
      description: 'This Java command-line tool is designed to encode any given input text by generating a unique alphanumeric code, offering an efficient solution for message encryption. The encoding feature ensures that each input is converted to a distinct alphanumeric code, useful for secure data transfer or storage. In addition to encoding, the application includes a decode function, allowing users to reverse the encoding process and retrieve the original message from the generated code. The tool’s decoding feature is precise, accurately mapping each code back to its original text message, making it reliable for both short-term and long-term storage of encoded data. The design is optimized for ease of use, making encoding and decoding as seamless as possible for users. This project is suitable for any application that requires secure, reversible encoding, such as personal information handling or confidential communication.',
      projectLink: 'https://github.com/aniketkumargaikwad/Text-Encryption-System',
      tags: [Tag.SYSTEM_DESIGN, Tag.OOPS, Tag.LLD, Tag.JAVA],
      pictures: []
    }
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Aniket | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
