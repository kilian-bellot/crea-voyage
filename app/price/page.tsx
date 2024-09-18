import Page from "@app/_components/Page";
import Section from "@app/_components/Section";

export default function Price() {
  return (
    <Page>
      <Section title={"Tarif d’accompagnement pour votre voyage sur mesure"}>
        <div>
          <p>15$ par jour</p>
          <p>Ce tarif à 15$ est prévu pour un séjour de 4 personnes.</p>
          <p>Une majoration de 5$ par jour de voyage et par personne supplémentaires sera appliquée.</p>
          <p>Si vous dépassez 1 hébergement une majoration de 5$ par jour de voyage sera appliquée.</p>
        </div>
        <div>
          <p>Qu’est ce qui est inclus dans ce prix ?</p>
          <p>Des échanges autant que nécessaires</p>
          <p>Toutes les recherches liées à votre projet de voyage</p>
          <p>Mes conseils et mon expertise sur la destination choisie</p>
          <p>La création d’un carnet de voyage personnalisé</p>
        </div>
      </Section>
    </Page>
  );
}
