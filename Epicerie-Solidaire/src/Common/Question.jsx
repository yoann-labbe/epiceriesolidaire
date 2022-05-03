// Texte dans la fenêtre Pop up Détail (info prix)

import React from 'react';

export default function Question() {
    return (
        <div>
                   <p>
          Le prix de chaque produit est indiqué dans la fiche descriptif du produit, il est établi en TTC. Il est à préciser que des frais supplémentaires peuvent être prélevés par votre organisme bancaire lors du paiement.
        </p>
        <p>
          MYFLOWERLIFE précise que le prix de la commande d’un produit indiqué sur la Plateforme se décompose selon les modalités suivantes :
        </p>
        <ul>
          <li>-\tLa valeur du produit fixée par le Vendeur ;</li>
          <li>-\tnos frais de service ;</li>
          <li>-\tles frais de notre prestataire de paiement STRIPE.</li>
        </ul>
        <p>
          La valeur du produit est fixée unilatéralement par le Vendeur, sans intervention de MYFLOWERLIFE.
        </p>
        <p>
          Il est à noter que dans le cadre de la mise à disposition de sa Plateforme, MYFLOWERLIFE facture des frais de service à la charge de l’Acheteur, afin d’assurer le bon fonctionnement et le développement de sa Plateforme et se rémunérer.
        </p>
        <p>
          Ces frais de service, qui viennent s’ajouter au prix de vente, sont calculés en fonction de la valeur du produit, fixée par le Vendeur, selon les modalités suivantes :
        </p>
        <ul>
          <li>-\t1€ TTC de frais de service par produit d’une valeur comprise entre 4 et 7.99€ TTC ;</li>
          <li>-\t2€ TTC de frais de service par produit d’une valeur comprise entre 8€ TTC à 14.99€ TTC ;</li>
          <li>-\t2.5€ TTC de frais de service par produit d’une valeur comprise entre 15€ TTC à 19.99€ TTC ;</li>
          <li>-\t3€ TTC de frais de service par produit d’une valeur comprise entre 20€ à 24.99€ TTC ;</li>
          <li>-\t4€ TTC de frais de service par produit d’une valeur supérieure à 25€ TTC.</li>
        </ul>
        <p>
          MYFLOWERLIFE se réserve le droit de modifier à tout moment les modalités de calcul des frais de service. Le cas échéant, ces modifications n’auront pas d’effet sur les frais de service acceptés par l’Acheteur avant la date de prise d’effet de ces modifications.
        </p>
        <p>
          Par ailleurs, notre établissement de paiement STRIPE ajoute pour chaque transaction une marge constante de 0.25€, sur le montant du prix de vente fixé par le Vendeur, et une marge variable de 1.4% calculée sur la somme globale du prix de vente et de nos frais de services.
        </p>
        <p>
          En cas d’utilisation d’une carte de paiement non européenne, STRIPE applique une marge variable de 2.9%.
        </p>
        <p>
          Pour finir, le prix est arrondi pour obtenir la tranche de 50 centimes supérieure.
        </p> 
        </div>
    );
}

