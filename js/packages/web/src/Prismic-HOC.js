import React from 'react';
import Prismic from 'prismic-javascript';
const PrismicFactory = PlatformSpecificComponent => {
     return class extends React.Component {
          constructor() {
            super();
            this.apiEndpoint = 'https://starlight-metaplex.prismic.io/api/v2';
            this.state = {
              prismicContent: null,
            }
          }
          componentWillMount = () => {
            const client = Prismic.client(this.apiEndpoint);
            client.query([
                Prismic.Predicates.at('document.type', 'test'),
             ]).then(res => {
                 this.setState({ prismicContent: res.results });
                 console.log("response:::---", res );
            })
            .catch(err => {
                 console.log('err is ', err);
            })
          }
          render() {
             return (
                 <PlatformSpecificComponent 
                    {...this.props}
                    prismicContent={this.state.prismicContent}
                  />
             )
           }
     }
}
export default PrismicFactory;