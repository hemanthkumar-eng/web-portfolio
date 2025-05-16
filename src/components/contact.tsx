import * as React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "8660306338",
      href: "tel:8660306338",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "Hemanthx96@gmail.com",
      href: "mailto:Hemanthx96@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border bg-card text-card-foreground hover:bg-accent transition-colors"
          >
            {contact.icon}
            <div>
              <p className="text-sm text-muted-foreground">{contact.label}</p>
              <p className="font-medium">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
