
import data from '../../../data/projects.json'

import { DefaultTeaserDisplay } from '@/app/components/defaultTeaserDisplay';

export default function MDMapplyPage() {

  const collectionData = data.filter(item => item.relatedCollection === "MDMapply");

  return (
    <>
      <div className="page__body flex flex-col m-auto">
        <div className="mb-[3rem] text-left mdm_intro">
          <h1 className='mb-[2rem]'>Shucong&apos;s Portfolio</h1>
          <p>a 250-500 word summary explaining how the items in the collection relate to each other and to your strengths.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo neque ac lorem euismod fringilla. Etiam at pulvinar odio. Praesent in mi metus. In eget odio vel tortor aliquet maximus eget eget tellus. Ut malesuada mi efficitur, volutpat est id, tincidunt ante. Sed consectetur commodo risus at sagittis. Donec pretium condimentum nisi, eget vestibulum justo euismod vitae. Duis sollicitudin, ante eu hendrerit maximus, risus augue porttitor elit, id rhoncus nibh turpis eget arcu. Etiam sed aliquet ligula, ac ultricies metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium libero non interdum interdum. Etiam sit amet pellentesque mauris, at maximus velit. Maecenas porttitor odio quis ante vestibulum semper. Praesent ornare laoreet tempor. Suspendisse tincidunt turpis eget nisi convallis, ut venenatis purus ornare. Phasellus et eros at arcu vehicula tristique vel ornare elit.</p>

          <p>Proin eu sem elit. Curabitur commodo tincidunt neque quis porta. Aliquam nisl erat, hendrerit vel ultrices rhoncus, accumsan ac massa. Fusce ut consectetur nibh. Duis blandit venenatis posuere. Duis nec leo dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam porta tellus nibh, vel varius ex eleifend sit amet. Nam placerat eros felis, a congue lorem euismod et. Mauris a ligula malesuada, bibendum nisl sed, posuere nisl. Duis aliquam, risus vel viverra pharetra, velit nibh fringilla felis, ut dictum ante sapien at risus.</p>

          <p>Sed pulvinar sollicitudin lobortis. Nam pharetra posuere commodo. Mauris ut lorem elit. Aliquam ut nisl eget nisi semper porta. Nunc at imperdiet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar pellentesque aliquet. Quisque at tellus nec ante posuere vehicula. Morbi imperdiet leo diam, ut tincidunt neque placerat sit amet. Aenean nec ipsum nunc. Proin condimentum tellus in est dapibus, vel consequat sapien vulputate. In pharetra, lacus eget efficitur consectetur, tellus diam cursus velit, a aliquam mauris ligula pretium lorem. Vestibulum fringilla efficitur felis.</p>

          <p>Donec non dictum nisl. Nullam imperdiet non elit id pharetra. Nulla eget efficitur purus, pretium semper lacus. Sed ipsum est, hendrerit vel tellus non, porta bibendum tellus. Morbi convallis erat diam, at suscipit nibh dignissim sit amet. Donec consectetur elementum libero eu cursus. Suspendisse at ultrices elit.</p>

          <p>In at faucibus nibh. Donec vitae lacus mi. Pellentesque nibh libero, suscipit semper neque a, pellentesque ultrices massa. Nulla aliquam arcu rhoncus diam rhoncus consequat. Fusce tempus arcu ligula, in convallis metus finibus at. Sed ut arcu non massa tristique sodales. Aliquam est enim, posuere in purus nec, malesuada bibendum sem. Morbi quis lacus sollicitudin, eleifend leo sed, gravida lectus. Nunc tellus tortor, bibendum at metus eget, mollis elementum sem. Curabitur mattis sit amet nibh ut imperdiet. Fusce lobortis feugiat iaculis. Quisque vitae porta nibh. Sed non lectus lectus. Morbi finibus urna quam, non blandit risus aliquet maximus.</p>
        </div>
        <div className="flex flex-col gap-[2.5rem] text-left">
          {
            collectionData.map((value, i) => {
              return (
                <DefaultTeaserDisplay key={i} value={value} link={`MDMapply/${value.id}`} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}