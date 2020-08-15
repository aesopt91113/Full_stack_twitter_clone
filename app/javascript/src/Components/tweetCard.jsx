import React from 'react'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ tweets, deleteTweet, username, disableDelete }) => (
	tweets.map((tweet) => 
		<Row className="justify-content-center" key={tweet.id}>
			<Col xs={6}>
				<div className="card">
					<div className="card-body">
						<b className="card-title">{tweet.username}</b>
						<div>
							{ tweet.message }
						</div>
						{
							username === tweet.username && !disableDelete && (
								<Button className="float-right" onClick={() => { deleteTweet(tweet.id) }}>Delete</Button>
							) 
						}
					</div>
				</div>
			</Col>
		</Row>
	)
)